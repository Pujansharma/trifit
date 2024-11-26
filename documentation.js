/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               pin:
 *                 type: string
 *                 example: 1234
 *               initialDeposit:
 *                 type: number
 *                 example: 1000
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 accountNumber:
 *                   type: string
 *                   example: BANK-1234567
 *       400:
 *         description: Username already exists or invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Username already exists
 */


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               pin:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2MzYzNlLTFmZDUtNGI0ZC1hMjQzLWE4MWEzOTg5MmM3MCIsImlhdCI6MTY4MTM3MzQ4MiwiZXhwIjoxNjgxMzc3MDgyfQ.W-QwdLMrHqL7dVr1KtgyUtk2DZfDC5p7WugfM95T9-o
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: Deposit
 *                       amount:
 *                         type: number
 *                         example: 1000
 *                       timestamp:
 *                         type: string
 *                         example: 2024-11-20T08:30:00Z
 *       401:
 *         description: Invalid credentials
 *       403:
 *         description: Account is locked
 */


/**
 * @swagger
 * /api/users/balance:
 *   get:
 *     summary: Fetch the balance of the logged-in user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Balance fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 balance:
 *                   type: number
 *                   example: 1000
 *                 accountNumber:
 *                   type: string
 *                   example: BANK-1234567
 *       401:
 *         description: Access token required
 */


/**
 * @swagger
 * /api/users/deposit:
 *   post:
 *     summary: Deposit money into the user's account
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               pin:
 *                 type: string
 *                 example: 1234
 *               amount:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Deposit successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Deposit successful
 *                 balance:
 *                   type: number
 *                   example: 1500
 *       401:
 *         description: Invalid PIN
 *       400:
 *         description: Insufficient funds
 */


/**
 * @swagger
 * /api/users/withdraw:
 *   post:
 *     summary: Withdraw money from the user's account
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               pin:
 *                 type: string
 *                 example: 1234
 *               amount:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Withdrawal successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Withdrawal successful
 *                 balance:
 *                   type: number
 *                   example: 500
 *       401:
 *         description: Invalid PIN
 *       400:
 *         description: Insufficient balance
 */


/**
 * @swagger
 * /api/users/transfer:
 *   post:
 *     summary: Transfer money to another user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recipientAccountNumber:
 *                 type: string
 *                 example: BANK-1234568
 *               pin:
 *                 type: string
 *                 example: 1234
 *               amount:
 *                 type: number
 *                 example: 100
 *     responses:
 *       200:
 *         description: Transfer successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Transfer successful
 *                 senderBalance:
 *                   type: number
 *                   example: 900
 *                 recipientBalance:
 *                   type: number
 *                   example: 1100
 *       400:
 *         description: Insufficient balance
 *       401:
 *         description: Invalid PIN
 *       403:
 *         description: Account is locked
 *       404:
 *         description: Recipient account does not exist
 */


/**
 * @swagger
 * /api/users/transactions:
 *   get:
 *     summary: Fetch the user's last 10 transactions
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Fetched transactions successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: Deposit
 *                       amount:
 *                         type: number
 *                         example: 100
 *                       timestamp:
 *                         type: string
 *                         example: 2024-11-26T14:00:00Z
 *       401:
 *         description: Access token required
 */
