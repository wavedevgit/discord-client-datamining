package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f32965a;

    /* renamed from: b  reason: collision with root package name */
    private final int f32966b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f32967c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f32966b;
    }

    public Notification b() {
        return this.f32967c;
    }

    public int c() {
        return this.f32965a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f32965a != gVar.f32965a || this.f32966b != gVar.f32966b) {
            return false;
        }
        return this.f32967c.equals(gVar.f32967c);
    }

    public int hashCode() {
        return (((this.f32965a * 31) + this.f32966b) * 31) + this.f32967c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f32965a + ", mForegroundServiceType=" + this.f32966b + ", mNotification=" + this.f32967c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f32965a = i10;
        this.f32967c = notification;
        this.f32966b = i11;
    }
}
