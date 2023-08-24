/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products',(table) => {
        table.increments('id').primary();
        table.string('product_name').notNullable();
        table.string('product_price').notNullable();
        table.boolean('active').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
