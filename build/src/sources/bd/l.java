package bd;

import com.facebook.react.uimanager.events.PointerEventHelper;
import java.nio.ByteBuffer;
import java.util.UUID;
import ne.h0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final UUID f6341a;

        /* renamed from: b  reason: collision with root package name */
        private final int f6342b;

        /* renamed from: c  reason: collision with root package name */
        private final byte[] f6343c;

        public a(UUID uuid, int i10, byte[] bArr) {
            this.f6341a = uuid;
            this.f6342b = i10;
            this.f6343c = bArr;
        }
    }

    public static byte[] a(UUID uuid, byte[] bArr) {
        return b(uuid, null, bArr);
    }

    public static byte[] b(UUID uuid, UUID[] uuidArr, byte[] bArr) {
        int i10;
        int i11;
        if (bArr != null) {
            i10 = bArr.length;
        } else {
            i10 = 0;
        }
        int i12 = i10 + 32;
        if (uuidArr != null) {
            i12 += (uuidArr.length * 16) + 4;
        }
        ByteBuffer allocate = ByteBuffer.allocate(i12);
        allocate.putInt(i12);
        allocate.putInt(1886614376);
        if (uuidArr != null) {
            i11 = PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
        } else {
            i11 = 0;
        }
        allocate.putInt(i11);
        allocate.putLong(uuid.getMostSignificantBits());
        allocate.putLong(uuid.getLeastSignificantBits());
        if (uuidArr != null) {
            allocate.putInt(uuidArr.length);
            for (UUID uuid2 : uuidArr) {
                allocate.putLong(uuid2.getMostSignificantBits());
                allocate.putLong(uuid2.getLeastSignificantBits());
            }
        }
        if (bArr != null && bArr.length != 0) {
            allocate.putInt(bArr.length);
            allocate.put(bArr);
        }
        return allocate.array();
    }

    public static boolean c(byte[] bArr) {
        if (d(bArr) != null) {
            return true;
        }
        return false;
    }

    private static a d(byte[] bArr) {
        h0 h0Var = new h0(bArr);
        if (h0Var.g() < 32) {
            return null;
        }
        h0Var.U(0);
        if (h0Var.q() != h0Var.a() + 4 || h0Var.q() != 1886614376) {
            return null;
        }
        int c10 = bd.a.c(h0Var.q());
        if (c10 > 1) {
            y.i("PsshAtomUtil", "Unsupported pssh version: " + c10);
            return null;
        }
        UUID uuid = new UUID(h0Var.A(), h0Var.A());
        if (c10 == 1) {
            h0Var.V(h0Var.L() * 16);
        }
        int L = h0Var.L();
        if (L != h0Var.a()) {
            return null;
        }
        byte[] bArr2 = new byte[L];
        h0Var.l(bArr2, 0, L);
        return new a(uuid, c10, bArr2);
    }

    public static byte[] e(byte[] bArr, UUID uuid) {
        a d10 = d(bArr);
        if (d10 == null) {
            return null;
        }
        if (uuid.equals(d10.f6341a)) {
            return d10.f6343c;
        }
        y.i("PsshAtomUtil", "UUID mismatch. Expected: " + uuid + ", got: " + d10.f6341a + ".");
        return null;
    }

    public static UUID f(byte[] bArr) {
        a d10 = d(bArr);
        if (d10 != null) {
            return d10.f6341a;
        }
        return null;
    }

    public static int g(byte[] bArr) {
        a d10 = d(bArr);
        if (d10 != null) {
            return d10.f6342b;
        }
        return -1;
    }
}
