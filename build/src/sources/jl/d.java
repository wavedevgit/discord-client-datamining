package jl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d extends Exception {

    /* renamed from: d  reason: collision with root package name */
    private String f31766d;

    public d(Throwable th2) {
        super(th2);
    }

    public void a(String str) {
        this.f31766d = str;
    }

    @Override // java.lang.Throwable
    public String toString() {
        return super.toString() + "Media transformation failed for job id: " + this.f31766d;
    }
}
