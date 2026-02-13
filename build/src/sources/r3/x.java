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
    public static final a f46668t = new a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final TreeMap f46669u = new TreeMap();

    /* renamed from: d  reason: collision with root package name */
    private final int f46670d;

    /* renamed from: e  reason: collision with root package name */
    private volatile String f46671e;

    /* renamed from: i  reason: collision with root package name */
    public final long[] f46672i;

    /* renamed from: o  reason: collision with root package name */
    public final double[] f46673o;

    /* renamed from: p  reason: collision with root package name */
    public final String[] f46674p;

    /* renamed from: q  reason: collision with root package name */
    public final byte[][] f46675q;

    /* renamed from: r  reason: collision with root package name */
    private final int[] f46676r;

    /* renamed from: s  reason: collision with root package name */
    private int f46677s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final x a(String query, int i10) {
            Intrinsics.checkNotNullParameter(query, "query");
            TreeMap treeMap = x.f46669u;
            synchronized (treeMap) {
                Map.Entry ceilingEntry = treeMap.ceilingEntry(Integer.valueOf(i10));
                if (ceilingEntry != null) {
                    treeMap.remove(ceilingEntry.getKey());
                    x sqliteQuery = (x) ceilingEntry.getValue();
                    sqliteQuery.n(query, i10);
                    Intrinsics.checkNotNullExpressionValue(sqliteQuery, "sqliteQuery");
                    return sqliteQuery;
                }
                Unit unit = Unit.f32556a;
                x xVar = new x(i10, null);
                xVar.n(query, i10);
                return xVar;
            }
        }

        public final void b() {
            TreeMap treeMap = x.f46669u;
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

    public static final x i(String str, int i10) {
        return f46668t.a(str, i10);
    }

    @Override // x3.i
    public void D1(int i10, byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f46676r[i10] = 5;
        this.f46675q[i10] = value;
    }

    @Override // x3.i
    public void S1(int i10) {
        this.f46676r[i10] = 1;
    }

    @Override // x3.i
    public void X(int i10, double d10) {
        this.f46676r[i10] = 3;
        this.f46673o[i10] = d10;
    }

    @Override // x3.j
    public String a() {
        String str = this.f46671e;
        if (str != null) {
            return str;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // x3.j
    public void h(x3.i statement) {
        Intrinsics.checkNotNullParameter(statement, "statement");
        int m10 = m();
        if (1 <= m10) {
            int i10 = 1;
            while (true) {
                int i11 = this.f46676r[i10];
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            if (i11 != 4) {
                                if (i11 == 5) {
                                    byte[] bArr = this.f46675q[i10];
                                    if (bArr != null) {
                                        statement.D1(i10, bArr);
                                    } else {
                                        throw new IllegalArgumentException("Required value was null.");
                                    }
                                }
                            } else {
                                String str = this.f46674p[i10];
                                if (str != null) {
                                    statement.i1(i10, str);
                                } else {
                                    throw new IllegalArgumentException("Required value was null.");
                                }
                            }
                        } else {
                            statement.X(i10, this.f46673o[i10]);
                        }
                    } else {
                        statement.v1(i10, this.f46672i[i10]);
                    }
                } else {
                    statement.S1(i10);
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
    public void i1(int i10, String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f46676r[i10] = 4;
        this.f46674p[i10] = value;
    }

    public int m() {
        return this.f46677s;
    }

    public final void n(String query, int i10) {
        Intrinsics.checkNotNullParameter(query, "query");
        this.f46671e = query;
        this.f46677s = i10;
    }

    public final void p() {
        TreeMap treeMap = f46669u;
        synchronized (treeMap) {
            treeMap.put(Integer.valueOf(this.f46670d), this);
            f46668t.b();
            Unit unit = Unit.f32556a;
        }
    }

    @Override // x3.i
    public void v1(int i10, long j10) {
        this.f46676r[i10] = 2;
        this.f46672i[i10] = j10;
    }

    private x(int i10) {
        this.f46670d = i10;
        int i11 = i10 + 1;
        this.f46676r = new int[i11];
        this.f46672i = new long[i11];
        this.f46673o = new double[i11];
        this.f46674p = new String[i11];
        this.f46675q = new byte[i11];
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
    }
}
