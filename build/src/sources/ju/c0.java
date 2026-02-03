package ju;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c0 implements Comparable {

    /* renamed from: e */
    public static final a f32326e = new a(null);

    /* renamed from: i */
    public static final String f32327i;

    /* renamed from: d */
    private final ByteString f32328d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ c0 d(a aVar, File file, boolean z10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            return aVar.a(file, z10);
        }

        public static /* synthetic */ c0 e(a aVar, String str, boolean z10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            return aVar.b(str, z10);
        }

        public static /* synthetic */ c0 f(a aVar, Path path, boolean z10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                z10 = false;
            }
            return aVar.c(path, z10);
        }

        public final c0 a(File file, boolean z10) {
            Intrinsics.checkNotNullParameter(file, "<this>");
            String file2 = file.toString();
            Intrinsics.checkNotNullExpressionValue(file2, "toString(...)");
            return b(file2, z10);
        }

        public final c0 b(String str, boolean z10) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            return ku.d.k(str, z10);
        }

        public final c0 c(Path path, boolean z10) {
            Intrinsics.checkNotNullParameter(path, "<this>");
            return b(path.toString(), z10);
        }

        private a() {
        }
    }

    static {
        String separator = File.separator;
        Intrinsics.checkNotNullExpressionValue(separator, "separator");
        f32327i = separator;
    }

    public c0(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f32328d = bytes;
    }

    public static /* synthetic */ c0 o(c0 c0Var, c0 c0Var2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return c0Var.m(c0Var2, z10);
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c0 other) {
        Intrinsics.checkNotNullParameter(other, "other");
        return d().compareTo(other.d());
    }

    public final ByteString d() {
        return this.f32328d;
    }

    public final c0 e() {
        int o10;
        o10 = ku.d.o(this);
        if (o10 == -1) {
            return null;
        }
        return new c0(d().I(0, o10));
    }

    public boolean equals(Object obj) {
        if ((obj instanceof c0) && Intrinsics.areEqual(((c0) obj).d(), d())) {
            return true;
        }
        return false;
    }

    public final List f() {
        int o10;
        ArrayList arrayList = new ArrayList();
        o10 = ku.d.o(this);
        if (o10 == -1) {
            o10 = 0;
        } else if (o10 < d().G() && d().k(o10) == 92) {
            o10++;
        }
        int G = d().G();
        int i10 = o10;
        while (o10 < G) {
            if (d().k(o10) == 47 || d().k(o10) == 92) {
                arrayList.add(d().I(i10, o10));
                i10 = o10 + 1;
            }
            o10++;
        }
        if (i10 < d().G()) {
            arrayList.add(d().I(i10, d().G()));
        }
        return arrayList;
    }

    public final String g() {
        return h().M();
    }

    public final ByteString h() {
        int l10;
        l10 = ku.d.l(this);
        if (l10 != -1) {
            return ByteString.J(d(), l10 + 1, 0, 2, null);
        }
        if (q() != null && d().G() == 2) {
            return ByteString.f44508p;
        }
        return d();
    }

    public int hashCode() {
        return d().hashCode();
    }

    public final c0 i() {
        ByteString byteString;
        ByteString byteString2;
        ByteString byteString3;
        boolean n10;
        int l10;
        ByteString byteString4;
        ByteString byteString5;
        ByteString d10 = d();
        byteString = ku.d.f36728d;
        if (!Intrinsics.areEqual(d10, byteString)) {
            ByteString d11 = d();
            byteString2 = ku.d.f36725a;
            if (!Intrinsics.areEqual(d11, byteString2)) {
                ByteString d12 = d();
                byteString3 = ku.d.f36726b;
                if (!Intrinsics.areEqual(d12, byteString3)) {
                    n10 = ku.d.n(this);
                    if (!n10) {
                        l10 = ku.d.l(this);
                        if (l10 == 2 && q() != null) {
                            if (d().G() == 3) {
                                return null;
                            }
                            return new c0(ByteString.J(d(), 0, 3, 1, null));
                        }
                        if (l10 == 1) {
                            ByteString d13 = d();
                            byteString5 = ku.d.f36726b;
                            if (d13.H(byteString5)) {
                                return null;
                            }
                        }
                        if (l10 == -1 && q() != null) {
                            if (d().G() == 2) {
                                return null;
                            }
                            return new c0(ByteString.J(d(), 0, 2, 1, null));
                        } else if (l10 == -1) {
                            byteString4 = ku.d.f36728d;
                            return new c0(byteString4);
                        } else if (l10 == 0) {
                            return new c0(ByteString.J(d(), 0, 1, 1, null));
                        } else {
                            return new c0(ByteString.J(d(), 0, l10, 1, null));
                        }
                    }
                }
            }
        }
        return null;
    }

    public final boolean isAbsolute() {
        int o10;
        o10 = ku.d.o(this);
        if (o10 != -1) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:55:0x007b, code lost:
        r9 = ku.d.m(r8);
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final ju.c0 k(ju.c0 r9) {
        /*
            r8 = this;
            java.lang.String r0 = "other"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            ju.c0 r0 = r8.e()
            ju.c0 r1 = r9.e()
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r1)
            java.lang.String r1 = " and "
            if (r0 == 0) goto Ld6
            java.util.List r0 = r8.f()
            java.util.List r2 = r9.f()
            int r3 = r0.size()
            int r4 = r2.size()
            int r3 = java.lang.Math.min(r3, r4)
            r4 = 0
            r5 = r4
        L2b:
            if (r5 >= r3) goto L3e
            java.lang.Object r6 = r0.get(r5)
            java.lang.Object r7 = r2.get(r5)
            boolean r6 = kotlin.jvm.internal.Intrinsics.areEqual(r6, r7)
            if (r6 == 0) goto L3e
            int r5 = r5 + 1
            goto L2b
        L3e:
            if (r5 != r3) goto L5d
            okio.ByteString r3 = r8.d()
            int r3 = r3.G()
            okio.ByteString r6 = r9.d()
            int r6 = r6.G()
            if (r3 != r6) goto L5d
            ju.c0$a r9 = ju.c0.f32326e
            java.lang.String r0 = "."
            r1 = 0
            r2 = 1
            ju.c0 r9 = ju.c0.a.e(r9, r0, r4, r2, r1)
            return r9
        L5d:
            int r3 = r2.size()
            java.util.List r3 = r2.subList(r5, r3)
            okio.ByteString r6 = ku.d.c()
            int r3 = r3.indexOf(r6)
            r6 = -1
            if (r3 != r6) goto Lb5
            okio.Buffer r1 = new okio.Buffer
            r1.<init>()
            okio.ByteString r9 = ku.d.f(r9)
            if (r9 != 0) goto L87
            okio.ByteString r9 = ku.d.f(r8)
            if (r9 != 0) goto L87
            java.lang.String r9 = ju.c0.f32327i
            okio.ByteString r9 = ku.d.i(r9)
        L87:
            int r2 = r2.size()
            r3 = r5
        L8c:
            if (r3 >= r2) goto L9b
            okio.ByteString r6 = ku.d.c()
            r1.a2(r6)
            r1.a2(r9)
            int r3 = r3 + 1
            goto L8c
        L9b:
            int r2 = r0.size()
        L9f:
            if (r5 >= r2) goto Lb0
            java.lang.Object r3 = r0.get(r5)
            okio.ByteString r3 = (okio.ByteString) r3
            r1.a2(r3)
            r1.a2(r9)
            int r5 = r5 + 1
            goto L9f
        Lb0:
            ju.c0 r9 = ku.d.q(r1, r4)
            return r9
        Lb5:
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r2 = "Impossible relative path to resolve: "
            r0.append(r2)
            r0.append(r8)
            r0.append(r1)
            r0.append(r9)
            java.lang.String r9 = r0.toString()
            java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
            java.lang.String r9 = r9.toString()
            r0.<init>(r9)
            throw r0
        Ld6:
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r2 = "Paths of different roots cannot be relative to each other: "
            r0.append(r2)
            r0.append(r8)
            r0.append(r1)
            r0.append(r9)
            java.lang.String r9 = r0.toString()
            java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
            java.lang.String r9 = r9.toString()
            r0.<init>(r9)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: ju.c0.k(ju.c0):ju.c0");
    }

    public final c0 l(String child) {
        Intrinsics.checkNotNullParameter(child, "child");
        return ku.d.j(this, ku.d.q(new Buffer().o0(child), false), false);
    }

    public final c0 m(c0 child, boolean z10) {
        Intrinsics.checkNotNullParameter(child, "child");
        return ku.d.j(this, child, z10);
    }

    public final Path p() {
        Path path = Paths.get(toString(), new String[0]);
        Intrinsics.checkNotNullExpressionValue(path, "get(...)");
        return path;
    }

    public final Character q() {
        ByteString byteString;
        ByteString d10 = d();
        byteString = ku.d.f36725a;
        if (ByteString.t(d10, byteString, 0, 2, null) != -1 || d().G() < 2 || d().k(1) != 58) {
            return null;
        }
        char k10 = (char) d().k(0);
        if (('a' > k10 || k10 >= '{') && ('A' > k10 || k10 >= '[')) {
            return null;
        }
        return Character.valueOf(k10);
    }

    public final File toFile() {
        return new File(toString());
    }

    public String toString() {
        return d().M();
    }
}
