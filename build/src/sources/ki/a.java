package ki;

import java.nio.ByteBuffer;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a implements s {

    /* renamed from: a  reason: collision with root package name */
    private final ByteBuffer f30883a;

    public a(ByteBuffer byteBuffer) {
        this.f30883a = byteBuffer.slice();
    }

    @Override // ki.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        ByteBuffer slice;
        synchronized (this.f30883a) {
            int i11 = (int) j10;
            this.f30883a.position(i11);
            this.f30883a.limit(i11 + i10);
            slice = this.f30883a.slice();
        }
        for (MessageDigest messageDigest : messageDigestArr) {
            slice.position(0);
            messageDigest.update(slice);
        }
    }

    @Override // ki.s
    public final long zza() {
        return this.f30883a.capacity();
    }
}
