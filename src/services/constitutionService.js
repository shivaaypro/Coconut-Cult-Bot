import { logger } from '../utils/logger.js';

export async function getConstitution(client, guildId) {
  try {
    if (!client.db) {
      logger.warn('Database not available');
      return null;
    }

    // Get constitution from database
    const result = await client.db.query(
      'SELECT * FROM alliance_constitution WHERE guild_id = $1 ORDER BY rule_number ASC',
      [guildId]
    );
    return result.rows || [];
  } catch (error) {
    logger.error('Error fetching constitution:', error);
    return [];
  }
}

export async function addRule(client, guildId, ruleNumber, title, content) {
  try {
    if (!client.db) {
      logger.warn('Database not available');
      return false;
    }

    await client.db.query(
      `INSERT INTO alliance_constitution (guild_id, rule_number, title, content, created_at)
       VALUES ($1, $2, $3, $4, NOW())`,
      [guildId, ruleNumber, title, content]
    );
    return true;
  } catch (error) {
    logger.error('Error adding rule:', error);
    return false;
  }
}

export async function updateRule(client, guildId, ruleId, title, content) {
  try {
    if (!client.db) {
      logger.warn('Database not available');
      return false;
    }

    await client.db.query(
      'UPDATE alliance_constitution SET title = $1, content = $2 WHERE id = $3 AND guild_id = $4',
      [title, content, ruleId, guildId]
    );
    return true;
  } catch (error) {
    logger.error('Error updating rule:', error);
    return false;
  }
}

export async function deleteRule(client, guildId, ruleId) {
  try {
    if (!client.db) {
      logger.warn('Database not available');
      return false;
    }

    await client.db.query(
      'DELETE FROM alliance_constitution WHERE id = $1 AND guild_id = $2',
      [ruleId, guildId]
    );
    return true;
  } catch (error) {
    logger.error('Error deleting rule:', error);
    return false;
  }
}
