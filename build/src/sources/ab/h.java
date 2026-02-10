package ab;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final int f540a;

    public h(int i10) {
        this.f540a = i10;
    }

    @Override // ab.d
    public c createImageTranscoder(ga.c cVar, boolean z10) {
        return new g(z10, this.f540a);
    }
}
