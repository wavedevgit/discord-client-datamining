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
    public static final a f48671t = new a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final TreeMap f48672u = new TreeMap();

    /* renamed from: d  reason: collision with root package name */
    private final int f48673d;

    /* renamed from: e  reason: collision with root package name */
    private volatile String f48674e;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f48675i;

    /* renamed from: o  reason: collision with root package name */
    public final double[] f48676o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f48677p;

    /* renamed from: q  reason: collision with root package name */
    public final byte[][] f48678q;

    /* renamed from: r  reason: collision with root package name */
    private final int[] f48679r;

    /* renamed from: s  reason: collision with root package name */
    private int f48680s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final x a(String query, int i10) {
            Intrinsics.checkNotNullParameter(query, "query");
            TreeMap treeMap = x.f48672u;
            synchronized (treeMap) {
                Map.Entry ceilingEntry = treeMap.ceilingEntry(Integer.valueOf(i10));
                if (ceilingEntry != null) {
                    treeMap.remove(ceilingEntry.getKey());
                    x sqliteQuery = (x) ceilingEntry.getValue();
                    sqliteQuery.n(query, i10);
                    Intrinsics.checkNotNullExpressionValue(sqliteQuery, "sqliteQuery");
                    return sqliteQuery;
                }
                Unit unit = Unit.f32056a;
                x xVar = new x(i10, null);
                xVar.n(query, i10);
                return xVar;
            }
        }

        public final void b() {
            TreeMap treeMap = x.f48672u;
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

    public static final x k(String str, int i10) {
        return f48671t.a(str, i10);
    }

    @Override // x3.i
    public void C1(int i10, byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f48679r[i10] = 5;
        this.f48678q[i10] = value;
    }

    @Override // x3.i
    public void O1(int i10) {
        this.f48679r[i10] = 1;
    }

    @Override // x3.i
    public void W(int i10, double d10) {
        this.f48679r[i10] = 3;
        this.f48676o[i10] = d10;
    }

    @Override // x3.j
    public String a() {
        String str = this.f48674e;
        if (str != null) {
            return str;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // x3.j
    public void g(x3.i statement) {
        Intrinsics.checkNotNullParameter(statement, "statement");
        int m10 = m();
        if (1 <= m10) {
            int i10 = 1;
            while (true) {
                int i11 = this.f48679r[i10];
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            if (i11 != 4) {
                                if (i11 == 5) {
                                    byte[] bArr = this.f48678q[i10];
                                    if (bArr != null) {
                                        statement.C1(i10, bArr);
                                    } else {
                                        throw new IllegalArgumentException("Required value was null.");
                                    }
                                }
                            } else {
                                String str = this.f48677p[i10];
                                if (str != null) {
                                    statement.g1(i10, str);
                                } else {
                                    throw new IllegalArgumentException("Required value was null.");
                                }
                            }
                        } else {
                            statement.W(i10, this.f48676o[i10]);
                        }
                    } else {
                        statement.v1(i10, this.f48675i[i10]);
                    }
                } else {
                    statement.O1(i10);
                }
                if (i10 != m10) {
                    i10++;
                } else {
                    return;
                }
            }
        }
    }

    @Override // x3.i
    public void g1(int i10, String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f48679r[i10] = 4;
        this.f48677p[i10] = value;
    }

    public int m() {
        return this.f48680s;
    }

    public final void n(String query, int i10) {
        Intrinsics.checkNotNullParameter(query, "query");
        this.f48674e = query;
        this.f48680s = i10;
    }

    public final void p() {
        TreeMap treeMap = f48672u;
        synchronized (treeMap) {
            treeMap.put(Integer.valueOf(this.f48673d), this);
            f48671t.b();
            Unit unit = Unit.f32056a;
        }
    }

    @Override // x3.i
    public void v1(int i10, long j10) {
        this.f48679r[i10] = 2;
        this.f48675i[i10] = j10;
    }

    private x(int i10) {
        this.f48673d = i10;
        int i11 = i10 + 1;
        this.f48679r = new int[i11];
        this.f48675i = new long[i11];
        this.f48676o = new double[i11];
        this.f48677p = new String[i11];
        this.f48678q = new byte[i11];
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }
}
