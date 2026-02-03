package me;

import java.util.Comparator;
import java.util.TreeSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements com.google.android.exoplayer2.upstream.cache.d {

    /* renamed from: a  reason: collision with root package name */
    private final long f37833a;

    /* renamed from: b  reason: collision with root package name */
    private final TreeSet f37834b = new TreeSet(new Comparator() { // from class: me.g
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int h10;
            h10 = h.h((c) obj, (c) obj2);
            return h10;
        }
    });

    /* renamed from: c  reason: collision with root package name */
    private long f37835c;

    public h(long j10) {
        this.f37833a = j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int h(c cVar, c cVar2) {
        long j10 = cVar.f37827q;
        long j11 = cVar2.f37827q;
        if (j10 - j11 == 0) {
            return cVar.compareTo(cVar2);
        }
        if (j10 < j11) {
            return -1;
        }
        return 1;
    }

    private void i(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        while (this.f37835c + j10 > this.f37833a && !this.f37834b.isEmpty()) {
            aVar.d((c) this.f37834b.first());
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a.b
    public void a(com.google.android.exoplayer2.upstream.cache.a aVar, c cVar, c cVar2) {
        d(aVar, cVar);
        c(aVar, cVar2);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.d
    public boolean b() {
        return true;
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a.b
    public void c(com.google.android.exoplayer2.upstream.cache.a aVar, c cVar) {
        this.f37834b.add(cVar);
        this.f37835c += cVar.f37824i;
        i(aVar, 0L);
    }

    @Override // com.google.android.exoplayer2.upstream.cache.a.b
    public void d(com.google.android.exoplayer2.upstream.cache.a aVar, c cVar) {
        this.f37834b.remove(cVar);
        this.f37835c -= cVar.f37824i;
    }

    @Override // com.google.android.exoplayer2.upstream.cache.d
    public void e(com.google.android.exoplayer2.upstream.cache.a aVar, String str, long j10, long j11) {
        if (j11 != -1) {
            i(aVar, j11);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.cache.d
    public void f() {
    }
}
