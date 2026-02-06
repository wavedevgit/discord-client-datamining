package x3;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements j {

    /* renamed from: i  reason: collision with root package name */
    public static final C0727a f54434i = new C0727a(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f54435d;

    /* renamed from: e  reason: collision with root package name */
    private final Object[] f54436e;

    /* renamed from: x3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0727a {
        public /* synthetic */ C0727a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final void a(i iVar, int i10, Object obj) {
            long j10;
            if (obj == null) {
                iVar.O1(i10);
            } else if (obj instanceof byte[]) {
                iVar.C1(i10, (byte[]) obj);
            } else if (obj instanceof Float) {
                iVar.W(i10, ((Number) obj).floatValue());
            } else if (obj instanceof Double) {
                iVar.W(i10, ((Number) obj).doubleValue());
            } else if (obj instanceof Long) {
                iVar.v1(i10, ((Number) obj).longValue());
            } else if (obj instanceof Integer) {
                iVar.v1(i10, ((Number) obj).intValue());
            } else if (obj instanceof Short) {
                iVar.v1(i10, ((Number) obj).shortValue());
            } else if (obj instanceof Byte) {
                iVar.v1(i10, ((Number) obj).byteValue());
            } else if (obj instanceof String) {
                iVar.g1(i10, (String) obj);
            } else if (obj instanceof Boolean) {
                if (((Boolean) obj).booleanValue()) {
                    j10 = 1;
                } else {
                    j10 = 0;
                }
                iVar.v1(i10, j10);
            } else {
                throw new IllegalArgumentException("Cannot bind " + obj + " at index " + i10 + " Supported types: Null, ByteArray, Float, Double, Long, Int, Short, Byte, String");
            }
        }

        public final void b(i statement, Object[] objArr) {
            Intrinsics.checkNotNullParameter(statement, "statement");
            if (objArr != null) {
                int length = objArr.length;
                int i10 = 0;
                while (i10 < length) {
                    Object obj = objArr[i10];
                    i10++;
                    a(statement, i10, obj);
                }
            }
        }

        private C0727a() {
        }
    }

    public a(String query, Object[] objArr) {
        Intrinsics.checkNotNullParameter(query, "query");
        this.f54435d = query;
        this.f54436e = objArr;
    }

    @Override // x3.j
    public String a() {
        return this.f54435d;
    }

    @Override // x3.j
    public void g(i statement) {
        Intrinsics.checkNotNullParameter(statement, "statement");
        f54434i.b(statement, this.f54436e);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(String query) {
        this(query, null);
        Intrinsics.checkNotNullParameter(query, "query");
    }
}
