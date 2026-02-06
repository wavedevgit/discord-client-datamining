package nv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f41169b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f41168a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f41169b != 0) {
            this.f41168a.append('\n');
        }
        this.f41168a.append(charSequence);
        this.f41169b++;
    }

    public String b() {
        return this.f41168a.toString();
    }
}
