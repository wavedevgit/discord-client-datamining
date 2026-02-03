package r3;

import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x implements x3.j, x3.i {

    /* renamed from: t  reason: collision with root package name */
    public static final a f48223t = new a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final TreeMap f48224u = new TreeMap();

    /* renamed from: d  reason: collision with root package name */
    private final int f48225d;

    /* renamed from: e  reason: collision with root package name */
    private volatile String f48226e;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f48227i;

    /* renamed from: o  reason: collision with root package name */
    public final double[] f48228o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f48229p;

    /* renamed from: q  reason: collision with root package name */
    public final byte[][] f48230q;

    /* renamed from: r  reason: collision with root package name */
    private final int[] f48231r;

    /* renamed from: s  reason: collision with root package name */
    private int f48232s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final x a(String query, int i10) {
            Intrinsics.checkNotNullParameter(query, "query");
            TreeMap treeMap = x.f48224u;
            synchronized (treeMap) {
                Map.Entry ceilingEntry = treeMap.ceilingEntry(Integer.valueOf(i10));
                if (ceilingEntry != null) {
                    treeMap.remove(ceilingEntry.getKey());
                    x sqliteQuery = (x) ceilingEntry.getValue();
                    sqliteQuery.x(query, i10);
                    Intrinsics.checkNotNullExpressionValue(sqliteQuery, "sqliteQuery");
                    return sqliteQuery;
                }
                Unit unit = Unit.f33074a;
                x xVar = new x(i10, null);
                xVar.x(query, i10);
                return xVar;
            }
        }

        public final void b() {
            TreeMap treeMap = x.f48224u;
            if (treeMap.size() > 15) {
                int size = treeMap.size() - 10;
                Iterator it = treeMap.descendingKeySet().iterator();
                Intrinsics.checkNotNullExpressionValue(it, "queryPool.descendingKeySet().iterator()");
                while (true) {
                    int i10 = size - 1;
                    if (size > 0) {
                        it.next();
                        it.remove();
                        size = i10;
                    } else {
                        return;
                    }
                }
            }
        }

        private a() {
        }
    }

    public /* synthetic */ x(int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10);
    }

    public static final x l(String str, int i10) {
        return f48223t.a(str, i10);
    }

    public final void B() {
        TreeMap treeMap = f48224u;
        synchronized (treeMap) {
            treeMap.put(Integer.valueOf(this.f48225d), this);
            f48223t.b();
            Unit unit = Unit.f33074a;
        }
    }

    @Override // x3.i
    public void D1(int i10, byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f48231r[i10] = 5;
        this.f48230q[i10] = value;
    }

    @Override // x3.i
    public void P1(int i10) {
        this.f48231r[i10] = 1;
    }

    @Override // x3.i
    public void T(int i10, double d10) {
        this.f48231r[i10] = 3;
        this.f48228o[i10] = d10;
    }

    @Override // x3.j
    public String a() {
        String str = this.f48226e;
        if (str != null) {
            return str;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // x3.j
    public void h(x3.i statement) {
        Intrinsics.checkNotNullParameter(statement, "statement");
        int n10 = n();
        if (1 <= n10) {
            int i10 = 1;
            while (true) {
                int i11 = this.f48231r[i10];
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            if (i11 != 4) {
                                if (i11 == 5) {
                                    byte[] bArr = this.f48230q[i10];
                                    if (bArr != null) {
                                        statement.D1(i10, bArr);
                                    } else {
                                        throw new IllegalArgumentException("Required value was null.");
                                    }
                                }
                            } else {
                                String str = this.f48229p[i10];
                                if (str != null) {
                                    statement.h1(i10, str);
                                } else {
                                    throw new IllegalArgumentException("Required value was null.");
                                }
                            }
                        } else {
                            statement.T(i10, this.f48228o[i10]);
                        }
                    } else {
                        statement.w1(i10, this.f48227i[i10]);
                    }
                } else {
                    statement.P1(i10);
                }
                if (i10 != n10) {
                    i10++;
                } else {
                    return;
                }
            }
        }
    }

    @Override // x3.i
    public void h1(int i10, String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f48231r[i10] = 4;
        this.f48229p[i10] = value;
    }

    public int n() {
        return this.f48232s;
    }

    @Override // x3.i
    public void w1(int i10, long j10) {
        this.f48231r[i10] = 2;
        this.f48227i[i10] = j10;
    }

    public final void x(String query, int i10) {
        Intrinsics.checkNotNullParameter(query, "query");
        this.f48226e = query;
        this.f48232s = i10;
    }

    private x(int i10) {
        this.f48225d = i10;
        int i11 = i10 + 1;
        this.f48231r = new int[i11];
        this.f48227i = new long[i11];
        this.f48228o = new double[i11];
        this.f48229p = new String[i11];
        this.f48230q = new byte[i11];
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }
}
