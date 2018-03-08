# Charlie Brown Tic-Tac-Four
Welcome to Charlie Brown Tic-Tac-Four!

This game was built with HTML, CSS and JavaScript/jQuery.

Approach:

After pseudo-coding an outline of the game, I began with a dynamically generated board of 42 spots. The differentiation between Player 1 as Charlie Brown and Player 2 as Snoopy ($icon1 and $icon2 in the code) is based on the number of clicks, with Player 1 always clicking first. So, on the first click and all subsequent odd numbered clicks, the Charlie Brown icon is appended to the space selected by Player 1. On click two and all subsequent even clicks, the Snoopy icon is appended to the space selected by Player 2.

How to Play:

Players should be able to take turns placing their icons - Player 1 as Charlie Brown and Player 2 as Snoopy, on their desired spot. Once a spot has an icon, it cannot be changed if clicked again.

If a player succeeds in placing their icon in four adjacent spots vertically, horizontally, or diagonally in four consecutive turns in one direction,
they win the game. For example, if Player 1 places their first icon at the bottom of a column, on their next play they must place their icon directly above the first, then directly above the second icon on their third play, then directly above their third icon on their fourth play.

Additionally, if a player has three adjacent icons in column 1, places an icon in column 2, and then places an icon in column1 to make four in a row, that does NOT count as a win. The same applies for rows and diagonal lines.

Unresolved Issues:

Logic, logic, logic.

This set-up did not lend itself well to true Connect Four piece placement - placing pieces on the lowest available space of the column that is clicked. I
did have the left-most column working at one point, but when trying to apply the same rules to the rest of the columns, the game did not behave.

The win states only account for four in a row placements that are made linearly and consecutively. It does not account for more strategic play and placement or ties (one being if, for whatever reason, each player decides to fill up each column with their icon).

If I were to ever revisit this, I would definitely break down my initial pseudo-code even more than I think I need to. This would hopefully lead me to a
better initial set-up and ways of determining win and tie status, and having the icon placement and columns work in a true Connect Four fashion.

If that were to get straightened out, I would like to give the users the option to choose from a collection of different icons, reset the board, and allow for multiple rounds of play. And, for example if one game were two out of three wins each round would have a different background. An additional goal would be to allow for timed rounds.  


https://op9674a.github.io/game/
