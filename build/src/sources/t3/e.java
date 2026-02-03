package t3;

import android.database.Cursor;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import t3.d;
import x3.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {
    private static final Map a(g gVar, String str) {
        boolean z10;
        Cursor H1 = gVar.H1("PRAGMA table_info(`" + str + "`)");
        try {
            if (H1.getColumnCount() <= 0) {
                Map i10 = o0.i();
                ur.c.a(H1, null);
                return i10;
            }
            int columnIndex = H1.getColumnIndex(StackTraceHelper.NAME_KEY);
            int columnIndex2 = H1.getColumnIndex("type");
            int columnIndex3 = H1.getColumnIndex("notnull");
            int columnIndex4 = H1.getColumnIndex("pk");
            int columnIndex5 = H1.getColumnIndex("dflt_value");
            Map c10 = o0.c();
            while (H1.moveToNext()) {
                String name = H1.getString(columnIndex);
                String type = H1.getString(columnIndex2);
                if (H1.getInt(columnIndex3) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                boolean z11 = z10;
                int i11 = H1.getInt(columnIndex4);
                String string = H1.getString(columnIndex5);
                Intrinsics.checkNotNullExpressionValue(name, "name");
                Intrinsics.checkNotNullExpressionValue(type, "type");
                c10.put(name, new d.a(name, type, z11, i11, string, 2));
            }
            Map b10 = o0.b(c10);
            ur.c.a(H1, null);
            return b10;
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                ur.c.a(H1, th2);
                throw th3;
            }
        }
    }

    private static final List b(Cursor cursor) {
        int columnIndex = cursor.getColumnIndex(StackTraceHelper.ID_KEY);
        int columnIndex2 = cursor.getColumnIndex("seq");
        int columnIndex3 = cursor.getColumnIndex("from");
        int columnIndex4 = cursor.getColumnIndex("to");
        List c10 = CollectionsKt.c();
        while (cursor.moveToNext()) {
            int i10 = cursor.getInt(columnIndex);
            int i11 = cursor.getInt(columnIndex2);
            String string = cursor.getString(columnIndex3);
            Intrinsics.checkNotNullExpressionValue(string, "cursor.getString(fromColumnIndex)");
            String string2 = cursor.getString(columnIndex4);
            Intrinsics.checkNotNullExpressionValue(string2, "cursor.getString(toColumnIndex)");
            c10.add(new d.C0644d(i10, i11, string, string2));
        }
        return CollectionsKt.U0(CollectionsKt.a(c10));
    }

    private static final Set c(g gVar, String str) {
        Cursor H1 = gVar.H1("PRAGMA foreign_key_list(`" + str + "`)");
        try {
            int columnIndex = H1.getColumnIndex(StackTraceHelper.ID_KEY);
            int columnIndex2 = H1.getColumnIndex("seq");
            int columnIndex3 = H1.getColumnIndex("table");
            int columnIndex4 = H1.getColumnIndex("on_delete");
            int columnIndex5 = H1.getColumnIndex("on_update");
            List b10 = b(H1);
            H1.moveToPosition(-1);
            Set b11 = x0.b();
            while (H1.moveToNext()) {
                if (H1.getInt(columnIndex2) == 0) {
                    int i10 = H1.getInt(columnIndex);
                    ArrayList arrayList = new ArrayList();
                    ArrayList arrayList2 = new ArrayList();
                    ArrayList<d.C0644d> arrayList3 = new ArrayList();
                    for (Object obj : b10) {
                        if (((d.C0644d) obj).e() == i10) {
                            arrayList3.add(obj);
                        }
                    }
                    for (d.C0644d c0644d : arrayList3) {
                        arrayList.add(c0644d.d());
                        arrayList2.add(c0644d.f());
                    }
                    String string = H1.getString(columnIndex3);
                    Intrinsics.checkNotNullExpressionValue(string, "cursor.getString(tableColumnIndex)");
                    String string2 = H1.getString(columnIndex4);
                    Intrinsics.checkNotNullExpressionValue(string2, "cursor.getString(onDeleteColumnIndex)");
                    String string3 = H1.getString(columnIndex5);
                    Intrinsics.checkNotNullExpressionValue(string3, "cursor.getString(onUpdateColumnIndex)");
                    b11.add(new d.c(string, string2, string3, arrayList, arrayList2));
                }
            }
            Set a10 = x0.a(b11);
            ur.c.a(H1, null);
            return a10;
        } finally {
        }
    }

    private static final d.e d(g gVar, String str, boolean z10) {
        String str2;
        Cursor H1 = gVar.H1("PRAGMA index_xinfo(`" + str + "`)");
        try {
            int columnIndex = H1.getColumnIndex("seqno");
            int columnIndex2 = H1.getColumnIndex("cid");
            int columnIndex3 = H1.getColumnIndex(StackTraceHelper.NAME_KEY);
            int columnIndex4 = H1.getColumnIndex("desc");
            if (columnIndex != -1 && columnIndex2 != -1 && columnIndex3 != -1 && columnIndex4 != -1) {
                TreeMap treeMap = new TreeMap();
                TreeMap treeMap2 = new TreeMap();
                while (H1.moveToNext()) {
                    if (H1.getInt(columnIndex2) >= 0) {
                        int i10 = H1.getInt(columnIndex);
                        String columnName = H1.getString(columnIndex3);
                        if (H1.getInt(columnIndex4) > 0) {
                            str2 = "DESC";
                        } else {
                            str2 = "ASC";
                        }
                        Integer valueOf = Integer.valueOf(i10);
                        Intrinsics.checkNotNullExpressionValue(columnName, "columnName");
                        treeMap.put(valueOf, columnName);
                        treeMap2.put(Integer.valueOf(i10), str2);
                    }
                }
                Collection values = treeMap.values();
                Intrinsics.checkNotNullExpressionValue(values, "columnsMap.values");
                List h12 = CollectionsKt.h1(values);
                Collection values2 = treeMap2.values();
                Intrinsics.checkNotNullExpressionValue(values2, "ordersMap.values");
                d.e eVar = new d.e(str, z10, h12, CollectionsKt.h1(values2));
                ur.c.a(H1, null);
                return eVar;
            }
            ur.c.a(H1, null);
            return null;
        } finally {
        }
    }

    private static final Set e(g gVar, String str) {
        Cursor H1 = gVar.H1("PRAGMA index_list(`" + str + "`)");
        try {
            int columnIndex = H1.getColumnIndex(StackTraceHelper.NAME_KEY);
            int columnIndex2 = H1.getColumnIndex("origin");
            int columnIndex3 = H1.getColumnIndex("unique");
            if (columnIndex != -1 && columnIndex2 != -1 && columnIndex3 != -1) {
                Set b10 = x0.b();
                while (H1.moveToNext()) {
                    if (Intrinsics.areEqual("c", H1.getString(columnIndex2))) {
                        String name = H1.getString(columnIndex);
                        boolean z10 = true;
                        if (H1.getInt(columnIndex3) != 1) {
                            z10 = false;
                        }
                        Intrinsics.checkNotNullExpressionValue(name, "name");
                        d.e d10 = d(gVar, name, z10);
                        if (d10 == null) {
                            ur.c.a(H1, null);
                            return null;
                        }
                        b10.add(d10);
                    }
                }
                Set a10 = x0.a(b10);
                ur.c.a(H1, null);
                return a10;
            }
            ur.c.a(H1, null);
            return null;
        } finally {
        }
    }

    public static final d f(g database, String tableName) {
        Intrinsics.checkNotNullParameter(database, "database");
        Intrinsics.checkNotNullParameter(tableName, "tableName");
        return new d(tableName, a(database, tableName), c(database, tableName), e(database, tableName));
    }
}
