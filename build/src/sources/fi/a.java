package fi;

import java.nio.ByteBuffer;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a implements s {

    /* renamed from: a  reason: collision with root package name */
    private final ByteBuffer f25191a;

    public a(ByteBuffer byteBuffer) {
        this.f25191a = byteBuffer.slice();
    }

    @Override // fi.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        ByteBuffer slice;
        synchronized (this.f25191a) {
            int i11 = (int) j10;
            this.f25191a.position(i11);
            this.f25191a.limit(i11 + i10);
            slice = this.f25191a.slice();
        }
        for (MessageDigest messageDigest : messageDigestArr) {
            slice.position(0);
            messageDigest.update(slice);
        }
    }

    @Override // fi.s
    public final long zza() {
        return this.f25191a.capacity();
    }
}
