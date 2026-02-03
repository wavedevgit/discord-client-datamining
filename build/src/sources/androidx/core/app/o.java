package androidx.core.app;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.content.LocusId;
import android.graphics.drawable.Icon;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.text.TextUtils;
import android.widget.RemoteViews;
import androidx.core.app.NotificationCompat;
import androidx.core.graphics.drawable.IconCompat;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o implements j {

    /* renamed from: a  reason: collision with root package name */
    private final Context f3142a;

    /* renamed from: b  reason: collision with root package name */
    private final Notification.Builder f3143b;

    /* renamed from: c  reason: collision with root package name */
    private final NotificationCompat.Builder f3144c;

    /* renamed from: d  reason: collision with root package name */
    private RemoteViews f3145d;

    /* renamed from: e  reason: collision with root package name */
    private RemoteViews f3146e;

    /* renamed from: f  reason: collision with root package name */
    private final List f3147f = new ArrayList();

    /* renamed from: g  reason: collision with root package name */
    private final Bundle f3148g = new Bundle();

    /* renamed from: h  reason: collision with root package name */
    private int f3149h;

    /* renamed from: i  reason: collision with root package name */
    private RemoteViews f3150i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static Notification.Builder a(Notification.Builder builder, Notification.Action action) {
            return builder.addAction(action);
        }

        static Notification.Action.Builder b(Notification.Action.Builder builder, Bundle bundle) {
            return builder.addExtras(bundle);
        }

        static Notification.Action.Builder c(Notification.Action.Builder builder, android.app.RemoteInput remoteInput) {
            return builder.addRemoteInput(remoteInput);
        }

        static Notification.Action d(Notification.Action.Builder builder) {
            return builder.build();
        }

        static String e(Notification notification) {
            return notification.getGroup();
        }

        static Notification.Builder f(Notification.Builder builder, String str) {
            return builder.setGroup(str);
        }

        static Notification.Builder g(Notification.Builder builder, boolean z10) {
            return builder.setGroupSummary(z10);
        }

        static Notification.Builder h(Notification.Builder builder, boolean z10) {
            return builder.setLocalOnly(z10);
        }

        static Notification.Builder i(Notification.Builder builder, String str) {
            return builder.setSortKey(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        static Notification.Builder a(Notification.Builder builder, String str) {
            return builder.addPerson(str);
        }

        static Notification.Builder b(Notification.Builder builder, String str) {
            return builder.setCategory(str);
        }

        static Notification.Builder c(Notification.Builder builder, int i10) {
            return builder.setColor(i10);
        }

        static Notification.Builder d(Notification.Builder builder, Notification notification) {
            return builder.setPublicVersion(notification);
        }

        static Notification.Builder e(Notification.Builder builder, Uri uri, Object obj) {
            return builder.setSound(uri, (AudioAttributes) obj);
        }

        static Notification.Builder f(Notification.Builder builder, int i10) {
            return builder.setVisibility(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static Notification.Action.Builder a(Icon icon, CharSequence charSequence, PendingIntent pendingIntent) {
            return new Notification.Action.Builder(icon, charSequence, pendingIntent);
        }

        static Notification.Builder b(Notification.Builder builder, Icon icon) {
            return builder.setLargeIcon(icon);
        }

        static Notification.Builder c(Notification.Builder builder, Object obj) {
            return builder.setSmallIcon((Icon) obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        static Notification.Action.Builder a(Notification.Action.Builder builder, boolean z10) {
            return builder.setAllowGeneratedReplies(z10);
        }

        static Notification.Builder b(Notification.Builder builder, RemoteViews remoteViews) {
            return builder.setCustomBigContentView(remoteViews);
        }

        static Notification.Builder c(Notification.Builder builder, RemoteViews remoteViews) {
            return builder.setCustomContentView(remoteViews);
        }

        static Notification.Builder d(Notification.Builder builder, RemoteViews remoteViews) {
            return builder.setCustomHeadsUpContentView(remoteViews);
        }

        static Notification.Builder e(Notification.Builder builder, CharSequence[] charSequenceArr) {
            return builder.setRemoteInputHistory(charSequenceArr);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e {
        static Notification.Builder a(Context context, String str) {
            return new Notification.Builder(context, str);
        }

        static Notification.Builder b(Notification.Builder builder, int i10) {
            return builder.setBadgeIconType(i10);
        }

        static Notification.Builder c(Notification.Builder builder, boolean z10) {
            return builder.setColorized(z10);
        }

        static Notification.Builder d(Notification.Builder builder, int i10) {
            return builder.setGroupAlertBehavior(i10);
        }

        static Notification.Builder e(Notification.Builder builder, CharSequence charSequence) {
            return builder.setSettingsText(charSequence);
        }

        static Notification.Builder f(Notification.Builder builder, String str) {
            return builder.setShortcutId(str);
        }

        static Notification.Builder g(Notification.Builder builder, long j10) {
            return builder.setTimeoutAfter(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f {
        static Notification.Builder a(Notification.Builder builder, android.app.Person person) {
            return builder.addPerson(person);
        }

        static Notification.Action.Builder b(Notification.Action.Builder builder, int i10) {
            return builder.setSemanticAction(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {
        static Notification.Builder a(Notification.Builder builder, boolean z10) {
            return builder.setAllowSystemGeneratedContextualActions(z10);
        }

        static Notification.Builder b(Notification.Builder builder, Notification.BubbleMetadata bubbleMetadata) {
            return builder.setBubbleMetadata(bubbleMetadata);
        }

        static Notification.Action.Builder c(Notification.Action.Builder builder, boolean z10) {
            return builder.setContextual(z10);
        }

        static Notification.Builder d(Notification.Builder builder, Object obj) {
            return builder.setLocusId((LocusId) obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h {
        static Notification.Action.Builder a(Notification.Action.Builder builder, boolean z10) {
            return builder.setAuthenticationRequired(z10);
        }

        static Notification.Builder b(Notification.Builder builder, int i10) {
            return builder.setForegroundServiceBehavior(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class i {
        static Notification.Builder a(Notification.Builder builder, String str) {
            return builder.setShortCriticalText(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(NotificationCompat.Builder builder) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        Icon w10;
        List<String> list;
        int i10;
        this.f3144c = builder;
        Context context = builder.f2967a;
        this.f3142a = context;
        if (Build.VERSION.SDK_INT >= 26) {
            this.f3143b = e.a(context, builder.M);
        } else {
            this.f3143b = new Notification.Builder(builder.f2967a);
        }
        Notification notification = builder.V;
        Notification.Builder lights = this.f3143b.setWhen(notification.when).setSmallIcon(notification.icon, notification.iconLevel).setContent(notification.contentView).setTicker(notification.tickerText, builder.f2976j).setVibrate(notification.vibrate).setLights(notification.ledARGB, notification.ledOnMS, notification.ledOffMS);
        if ((notification.flags & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        Notification.Builder ongoing = lights.setOngoing(z10);
        if ((notification.flags & 8) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        Notification.Builder onlyAlertOnce = ongoing.setOnlyAlertOnce(z11);
        if ((notification.flags & 16) != 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        Notification.Builder deleteIntent = onlyAlertOnce.setAutoCancel(z12).setDefaults(notification.defaults).setContentTitle(builder.f2971e).setContentText(builder.f2972f).setContentInfo(builder.f2978l).setContentIntent(builder.f2974h).setDeleteIntent(notification.deleteIntent);
        PendingIntent pendingIntent = builder.f2975i;
        if ((notification.flags & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z13 = true;
        } else {
            z13 = false;
        }
        deleteIntent.setFullScreenIntent(pendingIntent, z13).setNumber(builder.f2979m).setProgress(builder.f2988v, builder.f2989w, builder.f2990x);
        Notification.Builder builder2 = this.f3143b;
        IconCompat iconCompat = builder.f2977k;
        if (iconCompat == null) {
            w10 = null;
        } else {
            w10 = iconCompat.w(context);
        }
        c.b(builder2, w10);
        this.f3143b.setSubText(builder.f2985s).setUsesChronometer(builder.f2982p).setPriority(builder.f2980n);
        NotificationCompat.l lVar = builder.f2984r;
        if (lVar instanceof NotificationCompat.h) {
            for (NotificationCompat.Action action : ((NotificationCompat.h) lVar).o()) {
                b(action);
            }
        } else {
            Iterator it = builder.f2968b.iterator();
            while (it.hasNext()) {
                b((NotificationCompat.Action) it.next());
            }
        }
        Bundle bundle = builder.F;
        if (bundle != null) {
            this.f3148g.putAll(bundle);
        }
        int i11 = Build.VERSION.SDK_INT;
        this.f3145d = builder.J;
        this.f3146e = builder.K;
        this.f3143b.setShowWhen(builder.f2981o);
        a.h(this.f3143b, builder.B);
        a.f(this.f3143b, builder.f2991y);
        a.i(this.f3143b, builder.A);
        a.g(this.f3143b, builder.f2992z);
        this.f3149h = builder.R;
        b.b(this.f3143b, builder.E);
        b.c(this.f3143b, builder.G);
        b.f(this.f3143b, builder.H);
        b.d(this.f3143b, builder.I);
        b.e(this.f3143b, notification.sound, notification.audioAttributes);
        if (i11 < 28) {
            list = e(g(builder.f2969c), builder.Y);
        } else {
            list = builder.Y;
        }
        if (list != null && !list.isEmpty()) {
            for (String str : list) {
                b.a(this.f3143b, str);
            }
        }
        this.f3150i = builder.L;
        if (builder.f2970d.size() > 0) {
            Bundle bundle2 = builder.i().getBundle("android.car.EXTENSIONS");
            bundle2 = bundle2 == null ? new Bundle() : bundle2;
            Bundle bundle3 = new Bundle(bundle2);
            Bundle bundle4 = new Bundle();
            for (int i12 = 0; i12 < builder.f2970d.size(); i12++) {
                bundle4.putBundle(Integer.toString(i12), p.e((NotificationCompat.Action) builder.f2970d.get(i12)));
            }
            bundle2.putBundle("invisible_actions", bundle4);
            bundle3.putBundle("invisible_actions", bundle4);
            builder.i().putBundle("android.car.EXTENSIONS", bundle2);
            this.f3148g.putBundle("android.car.EXTENSIONS", bundle3);
        }
        int i13 = Build.VERSION.SDK_INT;
        Object obj = builder.X;
        if (obj != null) {
            c.c(this.f3143b, obj);
        }
        this.f3143b.setExtras(builder.F);
        d.e(this.f3143b, builder.f2987u);
        RemoteViews remoteViews = builder.J;
        if (remoteViews != null) {
            d.c(this.f3143b, remoteViews);
        }
        RemoteViews remoteViews2 = builder.K;
        if (remoteViews2 != null) {
            d.b(this.f3143b, remoteViews2);
        }
        RemoteViews remoteViews3 = builder.L;
        if (remoteViews3 != null) {
            d.d(this.f3143b, remoteViews3);
        }
        if (i13 >= 26) {
            e.b(this.f3143b, builder.N);
            e.e(this.f3143b, builder.f2986t);
            e.f(this.f3143b, builder.O);
            e.g(this.f3143b, builder.Q);
            e.d(this.f3143b, builder.R);
            if (builder.D) {
                e.c(this.f3143b, builder.C);
            }
            if (!TextUtils.isEmpty(builder.M)) {
                this.f3143b.setSound(null).setDefaults(0).setLights(0, 0, 0).setVibrate(null);
            }
        }
        if (i13 >= 28) {
            Iterator it2 = builder.f2969c.iterator();
            while (it2.hasNext()) {
                f.a(this.f3143b, ((Person) it2.next()).k());
            }
        }
        int i14 = Build.VERSION.SDK_INT;
        if (i14 >= 29) {
            g.a(this.f3143b, builder.T);
            g.b(this.f3143b, NotificationCompat.g.k(builder.U));
            androidx.core.content.c cVar = builder.P;
            if (cVar != null) {
                g.d(this.f3143b, cVar.c());
            }
        }
        if (i14 >= 31 && (i10 = builder.S) != 0) {
            h.b(this.f3143b, i10);
        }
        if (i14 >= 36) {
            i.a(this.f3143b, builder.f2973g);
        }
        if (builder.W) {
            if (this.f3144c.f2992z) {
                this.f3149h = 2;
            } else {
                this.f3149h = 1;
            }
            this.f3143b.setVibrate(null);
            this.f3143b.setSound(null);
            int i15 = notification.defaults & (-4);
            notification.defaults = i15;
            this.f3143b.setDefaults(i15);
            if (i14 >= 26) {
                if (TextUtils.isEmpty(this.f3144c.f2991y)) {
                    a.f(this.f3143b, "silent");
                }
                e.d(this.f3143b, this.f3149h);
            }
        }
    }

    private void b(NotificationCompat.Action action) {
        Icon icon;
        Bundle bundle;
        IconCompat d10 = action.d();
        if (d10 != null) {
            icon = d10.v();
        } else {
            icon = null;
        }
        Notification.Action.Builder a10 = c.a(icon, action.h(), action.a());
        if (action.e() != null) {
            for (android.app.RemoteInput remoteInput : RemoteInput.b(action.e())) {
                a.c(a10, remoteInput);
            }
        }
        if (action.c() != null) {
            bundle = new Bundle(action.c());
        } else {
            bundle = new Bundle();
        }
        bundle.putBoolean("android.support.allowGeneratedReplies", action.b());
        int i10 = Build.VERSION.SDK_INT;
        d.a(a10, action.b());
        bundle.putInt("android.support.action.semanticAction", action.f());
        if (i10 >= 28) {
            f.b(a10, action.f());
        }
        if (i10 >= 29) {
            g.c(a10, action.j());
        }
        if (i10 >= 31) {
            h.a(a10, action.i());
        }
        bundle.putBoolean("android.support.action.showsUserInterface", action.g());
        a.b(a10, bundle);
        a.a(this.f3143b, a.d(a10));
    }

    private static List e(List list, List list2) {
        if (list == null) {
            return list2;
        }
        if (list2 == null) {
            return list;
        }
        u0.b bVar = new u0.b(list.size() + list2.size());
        bVar.addAll(list);
        bVar.addAll(list2);
        return new ArrayList(bVar);
    }

    private static List g(List list) {
        if (list == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(((Person) it.next()).j());
        }
        return arrayList;
    }

    private void h(Notification notification) {
        notification.sound = null;
        notification.vibrate = null;
        notification.defaults &= -4;
    }

    @Override // androidx.core.app.j
    public Notification.Builder a() {
        return this.f3143b;
    }

    public Notification c() {
        RemoteViews remoteViews;
        Bundle k10;
        RemoteViews l10;
        RemoteViews j10;
        NotificationCompat.l lVar = this.f3144c.f2984r;
        if (lVar != null) {
            lVar.b(this);
        }
        if (lVar != null) {
            remoteViews = lVar.k(this);
        } else {
            remoteViews = null;
        }
        Notification d10 = d();
        if (remoteViews != null) {
            d10.contentView = remoteViews;
        } else {
            RemoteViews remoteViews2 = this.f3144c.J;
            if (remoteViews2 != null) {
                d10.contentView = remoteViews2;
            }
        }
        if (lVar != null && (j10 = lVar.j(this)) != null) {
            d10.bigContentView = j10;
        }
        if (lVar != null && (l10 = this.f3144c.f2984r.l(this)) != null) {
            d10.headsUpContentView = l10;
        }
        if (lVar != null && (k10 = NotificationCompat.k(d10)) != null) {
            lVar.a(k10);
        }
        return d10;
    }

    protected Notification d() {
        if (Build.VERSION.SDK_INT >= 26) {
            return this.f3143b.build();
        }
        Notification build = this.f3143b.build();
        if (this.f3149h != 0) {
            if (a.e(build) != null && (build.flags & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 && this.f3149h == 2) {
                h(build);
            }
            if (a.e(build) != null && (build.flags & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0 && this.f3149h == 1) {
                h(build);
            }
        }
        return build;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Context f() {
        return this.f3142a;
    }
}
