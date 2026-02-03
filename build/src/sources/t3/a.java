package t3;

import android.database.Cursor;
import android.database.MatrixCursor;
import android.os.Build;
import android.util.Log;
import kotlin.collections.i;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {
    public static final Cursor a(Cursor c10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        try {
            MatrixCursor matrixCursor = new MatrixCursor(c10.getColumnNames(), c10.getCount());
            while (c10.moveToNext()) {
                Object[] objArr = new Object[c10.getColumnCount()];
                int columnCount = c10.getColumnCount();
                for (int i10 = 0; i10 < columnCount; i10++) {
                    int type = c10.getType(i10);
                    if (type != 0) {
                        if (type != 1) {
                            if (type != 2) {
                                if (type != 3) {
                                    if (type == 4) {
                                        objArr[i10] = c10.getBlob(i10);
                                    } else {
                                        throw new IllegalStateException();
                                    }
                                } else {
                                    objArr[i10] = c10.getString(i10);
                                }
                            } else {
                                objArr[i10] = Double.valueOf(c10.getDouble(i10));
                            }
                        } else {
                            objArr[i10] = Long.valueOf(c10.getLong(i10));
                        }
                    } else {
                        objArr[i10] = null;
                    }
                }
                matrixCursor.addRow(objArr);
            }
            wr.c.a(c10, null);
            return matrixCursor;
        } finally {
        }
    }

    private static final int b(Cursor cursor, String str) {
        if (Build.VERSION.SDK_INT > 25 || str.length() == 0) {
            return -1;
        }
        String[] columnNames = cursor.getColumnNames();
        Intrinsics.checkNotNullExpressionValue(columnNames, "columnNames");
        return c(columnNames, str);
    }

    public static final int c(String[] columnNames, String name) {
        Intrinsics.checkNotNullParameter(columnNames, "columnNames");
        Intrinsics.checkNotNullParameter(name, "name");
        String str = '.' + name;
        String str2 = '.' + name + '`';
        int length = columnNames.length;
        int i10 = 0;
        int i11 = 0;
        while (i10 < length) {
            String str3 = columnNames[i10];
            int i12 = i11 + 1;
            if (str3.length() >= name.length() + 2 && (StringsKt.z(str3, str, false, 2, null) || (str3.charAt(0) == '`' && StringsKt.z(str3, str2, false, 2, null)))) {
                return i11;
            }
            i10++;
            i11 = i12;
        }
        return -1;
    }

    public static final int d(Cursor c10, String name) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(name, "name");
        int columnIndex = c10.getColumnIndex(name);
        if (columnIndex >= 0) {
            return columnIndex;
        }
        int columnIndex2 = c10.getColumnIndex('`' + name + '`');
        if (columnIndex2 >= 0) {
            return columnIndex2;
        }
        return b(c10, name);
    }

    public static final int e(Cursor c10, String name) {
        String str;
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(name, "name");
        int d10 = d(c10, name);
        if (d10 >= 0) {
            return d10;
        }
        try {
            String[] columnNames = c10.getColumnNames();
            Intrinsics.checkNotNullExpressionValue(columnNames, "c.columnNames");
            str = i.v0(columnNames, null, null, null, 0, null, null, 63, null);
        } catch (Exception e10) {
            Log.d("RoomCursorUtil", "Cannot collect column names for debug purposes", e10);
            str = "unknown";
        }
        throw new IllegalArgumentException("column '" + name + "' does not exist. Available columns: " + str);
    }
}
