package za;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final int f56024a;

    public h(int i10) {
        this.f56024a = i10;
    }

    @Override // za.d
    public c createImageTranscoder(fa.c cVar, boolean z10) {
        return new g(z10, this.f56024a);
    }
}
