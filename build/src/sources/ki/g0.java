package ki;

import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g0 implements s {

    /* renamed from: a  reason: collision with root package name */
    private final FileChannel f30902a;

    /* renamed from: b  reason: collision with root package name */
    private final long f30903b;

    /* renamed from: c  reason: collision with root package name */
    private final long f30904c;

    public g0(FileChannel fileChannel, long j10, long j11) {
        this.f30902a = fileChannel;
        this.f30903b = j10;
        this.f30904c = j11;
    }

    @Override // ki.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        MappedByteBuffer map = this.f30902a.map(FileChannel.MapMode.READ_ONLY, this.f30903b + j10, i10);
        map.load();
        for (MessageDigest messageDigest : messageDigestArr) {
            map.position(0);
            messageDigest.update(map);
        }
    }

    @Override // ki.s
    public final long zza() {
        return this.f30904c;
    }
}
