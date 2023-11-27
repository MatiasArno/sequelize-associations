import app from './app';
import './models/associations';
import { PORT } from './constants';

// import './models/db/sync-db';

app.listen(PORT, () => console.log('Server listening on port', PORT));
