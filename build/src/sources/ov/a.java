package ov;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: b  reason: collision with root package name */
    private int f42745b = 0;

    /* renamed from: a  reason: collision with root package name */
    private final StringBuilder f42744a = new StringBuilder();

    public void a(CharSequence charSequence) {
        if (this.f42745b != 0) {
            this.f42744a.append('\n');
        }
        this.f42744a.append(charSequence);
        this.f42745b++;
    }

    public String b() {
        return this.f42744a.toString();
    }
}
