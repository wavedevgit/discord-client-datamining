package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f55167b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f55166a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f55167b != 0) {
            this.f55166a.append('\n');
        }
        this.f55166a.append(charSequence);
        this.f55167b++;
    }

    public String b() {
        return this.f55166a.toString();
    }
}
