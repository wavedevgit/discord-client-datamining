package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f25410b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f25409a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f25410b != 0) {
            this.f25409a.append('\n');
        }
        this.f25409a.append(charSequence);
        this.f25410b++;
    }

    public String b() {
        return this.f25409a.toString();
    }
}
