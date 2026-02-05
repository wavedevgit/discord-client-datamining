package ii;

import java.nio.ByteBuffer;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a implements s {

    /* renamed from: a  reason: collision with root package name */
    private final ByteBuffer f27386a;

    public a(ByteBuffer byteBuffer) {
        this.f27386a = byteBuffer.slice();
    }

    @Override // ii.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        ByteBuffer slice;
        synchronized (this.f27386a) {
            int i11 = (int) j10;
            this.f27386a.position(i11);
            this.f27386a.limit(i11 + i10);
            slice = this.f27386a.slice();
        }
        for (MessageDigest messageDigest : messageDigestArr) {
            slice.position(0);
            messageDigest.update(slice);
        }
    }

    @Override // ii.s
    public final long zza() {
        return this.f27386a.capacity();
    }
}
