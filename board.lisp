;; Don't know how to approach this in lisp, so will try a basically OOP approach(?)

(defclass chess_board ()
  ((rows
    :initarg :rows
    :accessor rows)))

(defvar b1 (make-instance 'chess_board :rows "empty"))

