package bv;

import av.c0;
import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f7852a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f7853b;

    /* renamed from: c  reason: collision with root package name */
    private static final ByteString f7854c;

    /* renamed from: d  reason: collision with root package name */
    private static final ByteString f7855d;

    /* renamed from: e  reason: collision with root package name */
    private static final ByteString f7856e;

    static {
        ByteString.a aVar = ByteString.f40591o;
        f7852a = aVar.g("/");
        f7853b = aVar.g("\\");
        f7854c = aVar.g("/\\");
        f7855d = aVar.g(".");
        f7856e = aVar.g("..");
    }

    public static final c0 j(c0 c0Var, c0 child, boolean z10) {
        Intrinsics.checkNotNullParameter(c0Var, "<this>");
        Intrinsics.checkNotNullParameter(child, "child");
        if (!child.isAbsolute() && child.q() == null) {
            ByteString m10 = m(c0Var);
            if (m10 == null && (m10 = m(child)) == null) {
                m10 = s(c0.f6227i);
            }
            Buffer buffer = new Buffer();
            buffer.e2(c0Var.d());
            if (buffer.size() > 0) {
                buffer.e2(m10);
            }
            buffer.e2(child.d());
            return q(buffer, z10);
        }
        return child;
    }

    public static final c0 k(String str, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return q(new Buffer().q0(str), z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int l(c0 c0Var) {
        int y10 = ByteString.y(c0Var.d(), f7852a, 0, 2, null);
        if (y10 != -1) {
            return y10;
        }
        return ByteString.y(c0Var.d(), f7853b, 0, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ByteString m(c0 c0Var) {
        ByteString d10 = c0Var.d();
        ByteString byteString = f7852a;
        if (ByteString.t(d10, byteString, 0, 2, null) != -1) {
            return byteString;
        }
        ByteString d11 = c0Var.d();
        ByteString byteString2 = f7853b;
        if (ByteString.t(d11, byteString2, 0, 2, null) == -1) {
            return null;
        }
        return byteString2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean n(c0 c0Var) {
        if (!c0Var.d().i(f7856e) || (c0Var.d().G() != 2 && !c0Var.d().A(c0Var.d().G() - 3, f7852a, 0, 1) && !c0Var.d().A(c0Var.d().G() - 3, f7853b, 0, 1))) {
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
            int r10 = c0Var.d().r(f7853b, 2);
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
        if (!Intrinsics.areEqual(byteString, f7853b) || buffer.size() < 2 || buffer.Z(1L) != 58) {
            return false;
        }
        char Z = (char) buffer.Z(0L);
        if ('a' > Z || Z >= '{') {
            if ('A' > Z || Z >= '[') {
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
        ByteString h12;
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        Buffer buffer2 = new Buffer();
        ByteString byteString2 = null;
        int i10 = 0;
        while (true) {
            if (!buffer.r0(0L, f7852a)) {
                byteString = f7853b;
                if (!buffer.r0(0L, byteString)) {
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
            buffer2.e2(byteString2);
            buffer2.e2(byteString2);
        } else if (i10 > 0) {
            Intrinsics.checkNotNull(byteString2);
            buffer2.e2(byteString2);
        } else {
            long g02 = buffer.g0(f7854c);
            if (byteString2 == null) {
                if (g02 == -1) {
                    byteString2 = s(c0.f6227i);
                } else {
                    byteString2 = r(buffer.Z(g02));
                }
            }
            if (p(buffer, byteString2)) {
                if (g02 == 2) {
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
        while (!buffer.p1()) {
            long g03 = buffer.g0(f7854c);
            if (g03 == -1) {
                h12 = buffer.M1();
            } else {
                h12 = buffer.h1(g03);
                buffer.readByte();
            }
            ByteString byteString3 = f7856e;
            if (Intrinsics.areEqual(h12, byteString3)) {
                if (!z12 || !arrayList.isEmpty()) {
                    if (z10 && (z12 || (!arrayList.isEmpty() && !Intrinsics.areEqual(CollectionsKt.z0(arrayList), byteString3)))) {
                        if (!z11 || arrayList.size() != 1) {
                            CollectionsKt.M(arrayList);
                        }
                    } else {
                        arrayList.add(h12);
                    }
                }
            } else if (!Intrinsics.areEqual(h12, f7855d) && !Intrinsics.areEqual(h12, ByteString.f40592p)) {
                arrayList.add(h12);
            }
        }
        int size = arrayList.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (i11 > 0) {
                buffer2.e2(byteString2);
            }
            buffer2.e2((ByteString) arrayList.get(i11));
        }
        if (buffer2.size() == 0) {
            buffer2.e2(f7855d);
        }
        return new c0(buffer2.M1());
    }

    private static final ByteString r(byte b10) {
        if (b10 != 47) {
            if (b10 == 92) {
                return f7853b;
            }
            throw new IllegalArgumentException("not a directory separator: " + ((int) b10));
        }
        return f7852a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ByteString s(String str) {
        if (Intrinsics.areEqual(str, "/")) {
            return f7852a;
        }
        if (Intrinsics.areEqual(str, "\\")) {
            return f7853b;
        }
        throw new IllegalArgumentException("not a directory separator: " + str);
    }
}
