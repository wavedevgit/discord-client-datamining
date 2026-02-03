package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f32125a;

    /* renamed from: b  reason: collision with root package name */
    private final int f32126b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f32127c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f32126b;
    }

    public Notification b() {
        return this.f32127c;
    }

    public int c() {
        return this.f32125a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f32125a != gVar.f32125a || this.f32126b != gVar.f32126b) {
            return false;
        }
        return this.f32127c.equals(gVar.f32127c);
    }

    public int hashCode() {
        return (((this.f32125a * 31) + this.f32126b) * 31) + this.f32127c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f32125a + ", mForegroundServiceType=" + this.f32126b + ", mNotification=" + this.f32127c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f32125a = i10;
        this.f32127c = notification;
        this.f32126b = i11;
    }
}
