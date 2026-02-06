package ru;

import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import qu.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final ByteString f49550a;

    /* renamed from: b  reason: collision with root package name */
    private static final ByteString f49551b;

    /* renamed from: c  reason: collision with root package name */
    private static final ByteString f49552c;

    /* renamed from: d  reason: collision with root package name */
    private static final ByteString f49553d;

    /* renamed from: e  reason: collision with root package name */
    private static final ByteString f49554e;

    static {
        ByteString.a aVar = ByteString.f43166o;
        f49550a = aVar.g("/");
        f49551b = aVar.g("\\");
        f49552c = aVar.g("/\\");
        f49553d = aVar.g(".");
        f49554e = aVar.g("..");
    }

    public static final c0 j(c0 c0Var, c0 child, boolean z10) {
        Intrinsics.checkNotNullParameter(c0Var, "<this>");
        Intrinsics.checkNotNullParameter(child, "child");
        if (!child.isAbsolute() && child.q() == null) {
            ByteString m10 = m(c0Var);
            if (m10 == null && (m10 = m(child)) == null) {
                m10 = s(c0.f48189i);
            }
            Buffer buffer = new Buffer();
            buffer.Z1(c0Var.d());
            if (buffer.size() > 0) {
                buffer.Z1(m10);
            }
            buffer.Z1(child.d());
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
        int y10 = ByteString.y(c0Var.d(), f49550a, 0, 2, null);
        if (y10 != -1) {
            return y10;
        }
        return ByteString.y(c0Var.d(), f49551b, 0, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ByteString m(c0 c0Var) {
        ByteString d10 = c0Var.d();
        ByteString byteString = f49550a;
        if (ByteString.t(d10, byteString, 0, 2, null) != -1) {
            return byteString;
        }
        ByteString d11 = c0Var.d();
        ByteString byteString2 = f49551b;
        if (ByteString.t(d11, byteString2, 0, 2, null) == -1) {
            return null;
        }
        return byteString2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean n(c0 c0Var) {
        if (!c0Var.d().i(f49554e) || (c0Var.d().G() != 2 && !c0Var.d().A(c0Var.d().G() - 3, f49550a, 0, 1) && !c0Var.d().A(c0Var.d().G() - 3, f49551b, 0, 1))) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int o(c0 c0Var) {
        if (c0Var.d().G() == 0) {
            return -1;
        }
        if (c0Var.d().j(0) == 47) {
            return 1;
        }
        if (c0Var.d().j(0) == 92) {
            if (c0Var.d().G() <= 2 || c0Var.d().j(1) != 92) {
                return 1;
            }
            int r10 = c0Var.d().r(f49551b, 2);
            if (r10 == -1) {
                return c0Var.d().G();
            }
            return r10;
        }
        if (c0Var.d().G() > 2 && c0Var.d().j(1) == 58 && c0Var.d().j(2) == 92) {
            char j10 = (char) c0Var.d().j(0);
            if ('a' > j10 || j10 >= '{') {
                if ('A' <= j10 && j10 < '[') {
                    return 3;
                }
            } else {
                return 3;
            }
        }
        return -1;
    }

    private static final boolean p(Buffer buffer, ByteString byteString) {
        if (!Intrinsics.areEqual(byteString, f49551b) || buffer.size() < 2 || buffer.Y(1L) != 58) {
            return false;
        }
        char Y = (char) buffer.Y(0L);
        if ('a' > Y || Y >= '{') {
            if ('A' > Y || Y >= '[') {
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
        ByteString f12;
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        Buffer buffer2 = new Buffer();
        ByteString byteString2 = null;
        int i10 = 0;
        while (true) {
            if (!buffer.s0(0L, f49550a)) {
                byteString = f49551b;
                if (!buffer.s0(0L, byteString)) {
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
            buffer2.Z1(byteString2);
            buffer2.Z1(byteString2);
        } else if (i10 > 0) {
            Intrinsics.checkNotNull(byteString2);
            buffer2.Z1(byteString2);
        } else {
            long f02 = buffer.f0(f49552c);
            if (byteString2 == null) {
                if (f02 == -1) {
                    byteString2 = s(c0.f48189i);
                } else {
                    byteString2 = r(buffer.Y(f02));
                }
            }
            if (p(buffer, byteString2)) {
                if (f02 == 2) {
                    buffer2.w0(buffer, 3L);
                } else {
                    buffer2.w0(buffer, 2L);
                }
            }
        }
        if (buffer2.size() > 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        ArrayList arrayList = new ArrayList();
        while (!buffer.n1()) {
            long f03 = buffer.f0(f49552c);
            if (f03 == -1) {
                f12 = buffer.K1();
            } else {
                f12 = buffer.f1(f03);
                buffer.readByte();
            }
            ByteString byteString3 = f49554e;
            if (Intrinsics.areEqual(f12, byteString3)) {
                if (!z12 || !arrayList.isEmpty()) {
                    if (z10 && (z12 || (!arrayList.isEmpty() && !Intrinsics.areEqual(CollectionsKt.z0(arrayList), byteString3)))) {
                        if (!z11 || arrayList.size() != 1) {
                            CollectionsKt.M(arrayList);
                        }
                    } else {
                        arrayList.add(f12);
                    }
                }
            } else if (!Intrinsics.areEqual(f12, f49553d) && !Intrinsics.areEqual(f12, ByteString.f43167p)) {
                arrayList.add(f12);
            }
        }
        int size = arrayList.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (i11 > 0) {
                buffer2.Z1(byteString2);
            }
            buffer2.Z1((ByteString) arrayList.get(i11));
        }
        if (buffer2.size() == 0) {
            buffer2.Z1(f49553d);
        }
        return new c0(buffer2.K1());
    }

    private static final ByteString r(byte b10) {
        if (b10 != 47) {
            if (b10 == 92) {
                return f49551b;
            }
            throw new IllegalArgumentException("not a directory separator: " + ((int) b10));
        }
        return f49550a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ByteString s(String str) {
        if (Intrinsics.areEqual(str, "/")) {
            return f49550a;
        }
        if (Intrinsics.areEqual(str, "\\")) {
            return f49551b;
        }
        throw new IllegalArgumentException("not a directory separator: " + str);
    }
}
