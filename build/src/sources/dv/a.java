package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f21086b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f21085a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f21086b != 0) {
            this.f21085a.append('\n');
        }
        this.f21085a.append(charSequence);
        this.f21086b++;
    }

    public String b() {
        return this.f21085a.toString();
    }
}
