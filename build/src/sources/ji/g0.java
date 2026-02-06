package ji;

import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g0 implements s {

    /* renamed from: a  reason: collision with root package name */
    private final FileChannel f29903a;

    /* renamed from: b  reason: collision with root package name */
    private final long f29904b;

    /* renamed from: c  reason: collision with root package name */
    private final long f29905c;

    public g0(FileChannel fileChannel, long j10, long j11) {
        this.f29903a = fileChannel;
        this.f29904b = j10;
        this.f29905c = j11;
    }

    @Override // ji.s
    public final void a(MessageDigest[] messageDigestArr, long j10, int i10) {
        MappedByteBuffer map = this.f29903a.map(FileChannel.MapMode.READ_ONLY, this.f29904b + j10, i10);
        map.load();
        for (MessageDigest messageDigest : messageDigestArr) {
            map.position(0);
            messageDigest.update(map);
        }
    }

    @Override // ji.s
    public final long zza() {
        return this.f29905c;
    }
}
