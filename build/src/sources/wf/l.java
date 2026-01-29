package wf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum l implements a {
    ED256(-260),
    ED512(-261),
    ED25519(-8),
    ES256(-7),
    ECDH_HKDF_256(-25),
    ES384(-35),
    ES512(-36);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f52489d;

    l(int i10) {
        this.f52489d = i10;
    }

    @Override // wf.a
    public int a() {
        return this.f52489d;
    }
}
