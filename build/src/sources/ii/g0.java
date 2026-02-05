package ii;

import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g0 implements s {

    /* renamed from: a  reason: collision with root package name */
    private final FileChannel f27405a;

    /* renamed from: b  reason: collision with root package name */
    private final long f27406b;

    /* renamed from: c  reason: collision with root package name */
    private final long f27407c;

    public g0(FileChannel fileChannel, long j10, long j11) {
        this.f27405a = fileChannel;
        this.f27406b = j10;
        this.f27407c = j11;
    }

    @Override // ii.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        MappedByteBuffer map = this.f27405a.map(FileChannel.MapMode.READ_ONLY, this.f27406b + j10, i10);
        map.load();
        for (MessageDigest messageDigest : messageDigestArr) {
            map.position(0);
            messageDigest.update(map);
        }
    }

    @Override // ii.s
    public final long zza() {
        return this.f27407c;
    }
}
