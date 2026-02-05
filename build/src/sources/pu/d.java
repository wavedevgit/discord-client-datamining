package pu;

import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import ou.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f46649a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f46650b;

    /* renamed from: c  reason: collision with root package name */
    private static final ByteString f46651c;

    /* renamed from: d  reason: collision with root package name */
    private static final ByteString f46652d;

    /* renamed from: e  reason: collision with root package name */
    private static final ByteString f46653e;

    static {
        ByteString.a aVar = ByteString.f44060o;
        f46649a = aVar.g("/");
        f46650b = aVar.g("\\");
        f46651c = aVar.g("/\\");
        f46652d = aVar.g(".");
        f46653e = aVar.g("..");
    }

    public static final c0 j(c0 c0Var, c0 child, boolean z10) {
        Intrinsics.checkNotNullParameter(c0Var, "<this>");
        Intrinsics.checkNotNullParameter(child, "child");
        if (!child.isAbsolute() && child.q() == null) {
            ByteString m10 = m(c0Var);
            if (m10 == null && (m10 = m(child)) == null) {
                m10 = s(c0.f44473i);
            }
            Buffer buffer = new Buffer();
            buffer.a2(c0Var.d());
            if (buffer.size() > 0) {
                buffer.a2(m10);
            }
            buffer.a2(child.d());
            return q(buffer, z10);
        }
        return child;
    }

    public static final c0 k(String str, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return q(new Buffer().o0(str), z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int l(c0 c0Var) {
        int y10 = ByteString.y(c0Var.d(), f46649a, 0, 2, null);
        if (y10 != -1) {
            return y10;
        }
        return ByteString.y(c0Var.d(), f46650b, 0, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ByteString m(c0 c0Var) {
        ByteString d10 = c0Var.d();
        ByteString byteString = f46649a;
        if (ByteString.t(d10, byteString, 0, 2, null) != -1) {
            return byteString;
        }
        ByteString d11 = c0Var.d();
        ByteString byteString2 = f46650b;
        if (ByteString.t(d11, byteString2, 0, 2, null) == -1) {
            return null;
        }
        return byteString2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean n(c0 c0Var) {
        if (!c0Var.d().i(f46653e) || (c0Var.d().G() != 2 && !c0Var.d().A(c0Var.d().G() - 3, f46649a, 0, 1) && !c0Var.d().A(c0Var.d().G() - 3, f46650b, 0, 1))) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int o(c0 c0Var) {
        if (c0Var.d().G() == 0) {
            return -1;
        }
        if (c0Var.d().k(0) == 47) {
            return 1;
        }
        if (c0Var.d().k(0) == 92) {
            if (c0Var.d().G() <= 2 || c0Var.d().k(1) != 92) {
                return 1;
            }
            int r10 = c0Var.d().r(f46650b, 2);
            if (r10 == -1) {
                return c0Var.d().G();
            }
            return r10;
        }
        if (c0Var.d().G() > 2 && c0Var.d().k(1) == 58 && c0Var.d().k(2) == 92) {
            char k10 = (char) c0Var.d().k(0);
            if ('a' > k10 || k10 >= '{') {
                if ('A' <= k10 && k10 < '[') {
                    return 3;
                }
            } else {
                return 3;
            }
        }
        return -1;
    }

    private static final boolean p(Buffer buffer, ByteString byteString) {
        if (!Intrinsics.areEqual(byteString, f46650b) || buffer.size() < 2 || buffer.F0(1L) != 58) {
            return false;
        }
        char F0 = (char) buffer.F0(0L);
        if ('a' > F0 || F0 >= '{') {
            if ('A' > F0 || F0 >= '[') {
                return false;
            }
            return true;
        }
        return true;
    }

    public static final c0 q(Buffer buffer, boolean z10) {
        ByteString byteString;
        boolean z11;
        boolean z12;
        ByteString g12;
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        Buffer buffer2 = new Buffer();
        ByteString byteString2 = null;
        int i10 = 0;
        while (true) {
            if (!buffer.q0(0L, f46649a)) {
                byteString = f46650b;
                if (!buffer.q0(0L, byteString)) {
                    break;
                }
            }
            byte readByte = buffer.readByte();
            if (byteString2 == null) {
                byteString2 = r(readByte);
            }
            i10++;
        }
        if (i10 >= 2 && Intrinsics.areEqual(byteString2, byteString)) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            Intrinsics.checkNotNull(byteString2);
            buffer2.a2(byteString2);
            buffer2.a2(byteString2);
        } else if (i10 > 0) {
            Intrinsics.checkNotNull(byteString2);
            buffer2.a2(byteString2);
        } else {
            long d02 = buffer.d0(f46651c);
            if (byteString2 == null) {
                if (d02 == -1) {
                    byteString2 = s(c0.f44473i);
                } else {
                    byteString2 = r(buffer.F0(d02));
                }
            }
            if (p(buffer, byteString2)) {
                if (d02 == 2) {
                    buffer2.u0(buffer, 3L);
                } else {
                    buffer2.u0(buffer, 2L);
                }
            }
        }
        if (buffer2.size() > 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        ArrayList arrayList = new ArrayList();
        while (!buffer.o1()) {
            long d03 = buffer.d0(f46651c);
            if (d03 == -1) {
                g12 = buffer.L1();
            } else {
                g12 = buffer.g1(d03);
                buffer.readByte();
            }
            ByteString byteString3 = f46653e;
            if (Intrinsics.areEqual(g12, byteString3)) {
                if (!z12 || !arrayList.isEmpty()) {
                    if (z10 && (z12 || (!arrayList.isEmpty() && !Intrinsics.areEqual(CollectionsKt.z0(arrayList), byteString3)))) {
                        if (!z11 || arrayList.size() != 1) {
                            CollectionsKt.M(arrayList);
                        }
                    } else {
                        arrayList.add(g12);
                    }
                }
            } else if (!Intrinsics.areEqual(g12, f46652d) && !Intrinsics.areEqual(g12, ByteString.f44061p)) {
                arrayList.add(g12);
            }
        }
        int size = arrayList.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (i11 > 0) {
                buffer2.a2(byteString2);
            }
            buffer2.a2((ByteString) arrayList.get(i11));
        }
        if (buffer2.size() == 0) {
            buffer2.a2(f46652d);
        }
        return new c0(buffer2.L1());
    }

    private static final ByteString r(byte b10) {
        if (b10 != 47) {
            if (b10 == 92) {
                return f46650b;
            }
            throw new IllegalArgumentException("not a directory separator: " + ((int) b10));
        }
        return f46649a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ByteString s(String str) {
        if (Intrinsics.areEqual(str, "/")) {
            return f46649a;
        }
        if (Intrinsics.areEqual(str, "\\")) {
            return f46650b;
        }
        throw new IllegalArgumentException("not a directory separator: " + str);
    }
}
