package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f31588a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31589b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f31590c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f31589b;
    }

    public Notification b() {
        return this.f31590c;
    }

    public int c() {
        return this.f31588a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f31588a != gVar.f31588a || this.f31589b != gVar.f31589b) {
            return false;
        }
        return this.f31590c.equals(gVar.f31590c);
    }

    public int hashCode() {
        return (((this.f31588a * 31) + this.f31589b) * 31) + this.f31590c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f31588a + ", mForegroundServiceType=" + this.f31589b + ", mNotification=" + this.f31590c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f31588a = i10;
        this.f31590c = notification;
        this.f31589b = i11;
    }
}
