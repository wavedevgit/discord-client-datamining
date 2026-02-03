package bv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f7770b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f7769a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f7770b != 0) {
            this.f7769a.append('\n');
        }
        this.f7769a.append(charSequence);
        this.f7770b++;
    }

    public String b() {
        return this.f7769a.toString();
    }
}
