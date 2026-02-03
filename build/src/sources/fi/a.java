package fi;

import java.nio.ByteBuffer;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a implements s {

    /* renamed from: a  reason: collision with root package name */
    private final ByteBuffer f24402a;

    public a(ByteBuffer byteBuffer) {
        this.f24402a = byteBuffer.slice();
    }

    @Override // fi.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        ByteBuffer slice;
        synchronized (this.f24402a) {
            int i11 = (int) j10;
            this.f24402a.position(i11);
            this.f24402a.limit(i11 + i10);
            slice = this.f24402a.slice();
        }
        for (MessageDigest messageDigest : messageDigestArr) {
            slice.position(0);
            messageDigest.update(slice);
        }
    }

    @Override // fi.s
    public final long zza() {
        return this.f24402a.capacity();
    }
}
