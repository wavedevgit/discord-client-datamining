package mi;

import java.nio.ByteBuffer;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a implements s {

    /* renamed from: a  reason: collision with root package name */
    private final ByteBuffer f36484a;

    public a(ByteBuffer byteBuffer) {
        this.f36484a = byteBuffer.slice();
    }

    @Override // mi.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        ByteBuffer slice;
        synchronized (this.f36484a) {
            int i11 = (int) j10;
            this.f36484a.position(i11);
            this.f36484a.limit(i11 + i10);
            slice = this.f36484a.slice();
        }
        for (MessageDigest messageDigest : messageDigestArr) {
            slice.position(0);
            messageDigest.update(slice);
        }
    }

    @Override // mi.s
    public final long zza() {
        return this.f36484a.capacity();
    }
}
