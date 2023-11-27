import Product from './product';
import Category from './category';
import Brand from './brand';

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);
