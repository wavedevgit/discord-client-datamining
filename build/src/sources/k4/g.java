package k4;

import android.app.Notification;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final int f31507a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31508b;

    /* renamed from: c  reason: collision with root package name */
    private final Notification f31509c;

    public g(int i10, Notification notification) {
        this(i10, notification, 0);
    }

    public int a() {
        return this.f31508b;
    }

    public Notification b() {
        return this.f31509c;
    }

    public int c() {
        return this.f31507a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || g.class != obj.getClass()) {
            return false;
        }
        g gVar = (g) obj;
        if (this.f31507a != gVar.f31507a || this.f31508b != gVar.f31508b) {
            return false;
        }
        return this.f31509c.equals(gVar.f31509c);
    }

    public int hashCode() {
        return (((this.f31507a * 31) + this.f31508b) * 31) + this.f31509c.hashCode();
    }

    public String toString() {
        return "ForegroundInfo{mNotificationId=" + this.f31507a + ", mForegroundServiceType=" + this.f31508b + ", mNotification=" + this.f31509c + '}';
    }

    public g(int i10, Notification notification, int i11) {
        this.f31507a = i10;
        this.f31509c = notification;
        this.f31508b = i11;
    }
}
