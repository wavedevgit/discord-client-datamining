package androidx.core.app;

import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.content.LocusId;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.drawable.Icon;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import android.text.SpannableStringBuilder;
import android.text.TextUtils;
import android.text.style.ForegroundColorSpan;
import android.util.Log;
import android.widget.RemoteViews;
import androidx.core.app.Person;
import androidx.core.graphics.drawable.IconCompat;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NotificationCompat {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class Action {

        /* renamed from: a  reason: collision with root package name */
        final Bundle f2945a;

        /* renamed from: b  reason: collision with root package name */
        private IconCompat f2946b;

        /* renamed from: c  reason: collision with root package name */
        private final RemoteInput[] f2947c;

        /* renamed from: d  reason: collision with root package name */
        private final RemoteInput[] f2948d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f2949e;

        /* renamed from: f  reason: collision with root package name */
        boolean f2950f;

        /* renamed from: g  reason: collision with root package name */
        private final int f2951g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f2952h;

        /* renamed from: i  reason: collision with root package name */
        public int f2953i;

        /* renamed from: j  reason: collision with root package name */
        public CharSequence f2954j;

        /* renamed from: k  reason: collision with root package name */
        public PendingIntent f2955k;

        /* renamed from: l  reason: collision with root package name */
        private boolean f2956l;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private final IconCompat f2957a;

            /* renamed from: b  reason: collision with root package name */
            private final CharSequence f2958b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingIntent f2959c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f2960d;

            /* renamed from: e  reason: collision with root package name */
            private final Bundle f2961e;

            /* renamed from: f  reason: collision with root package name */
            private ArrayList f2962f;

            /* renamed from: g  reason: collision with root package name */
            private int f2963g;

            /* renamed from: h  reason: collision with root package name */
            private boolean f2964h;

            /* renamed from: i  reason: collision with root package name */
            private boolean f2965i;

            /* renamed from: j  reason: collision with root package name */
            private boolean f2966j;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: androidx.core.app.NotificationCompat$Action$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class C0034a {
                static Bundle a(Notification.Action action) {
                    return action.getExtras();
                }

                static android.app.RemoteInput[] b(Notification.Action action) {
                    return action.getRemoteInputs();
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class b {
                static Icon a(Notification.Action action) {
                    return action.getIcon();
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class c {
                static boolean a(Notification.Action action) {
                    return action.getAllowGeneratedReplies();
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class d {
                static int a(Notification.Action action) {
                    return action.getSemanticAction();
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class e {
                static boolean a(Notification.Action action) {
                    return action.isContextual();
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class f {
                static boolean a(Notification.Action action) {
                    return action.isAuthenticationRequired();
                }
            }

            public a(IconCompat iconCompat, CharSequence charSequence, PendingIntent pendingIntent) {
                this(iconCompat, charSequence, pendingIntent, new Bundle(), null, true, 0, true, false, false);
            }

            private void d() {
                if (!this.f2965i || this.f2959c != null) {
                    return;
                }
                throw new NullPointerException("Contextual Actions must contain a valid PendingIntent");
            }

            public static a e(Notification.Action action) {
                a aVar;
                if (b.a(action) != null) {
                    aVar = new a(IconCompat.c(b.a(action)), action.title, action.actionIntent);
                } else {
                    aVar = new a(action.icon, action.title, action.actionIntent);
                }
                android.app.RemoteInput[] b10 = C0034a.b(action);
                if (b10 != null && b10.length != 0) {
                    for (android.app.RemoteInput remoteInput : b10) {
                        aVar.b(RemoteInput.c(remoteInput));
                    }
                }
                int i10 = Build.VERSION.SDK_INT;
                aVar.f2960d = c.a(action);
                if (i10 >= 28) {
                    aVar.i(d.a(action));
                }
                if (i10 >= 29) {
                    aVar.h(e.a(action));
                }
                if (i10 >= 31) {
                    aVar.g(f.a(action));
                }
                aVar.a(C0034a.a(action));
                return aVar;
            }

            public a a(Bundle bundle) {
                if (bundle != null) {
                    this.f2961e.putAll(bundle);
                }
                return this;
            }

            public a b(RemoteInput remoteInput) {
                if (this.f2962f == null) {
                    this.f2962f = new ArrayList();
                }
                if (remoteInput != null) {
                    this.f2962f.add(remoteInput);
                }
                return this;
            }

            public Action c() {
                RemoteInput[] remoteInputArr;
                d();
                ArrayList arrayList = new ArrayList();
                ArrayList arrayList2 = new ArrayList();
                ArrayList arrayList3 = this.f2962f;
                if (arrayList3 != null) {
                    Iterator it = arrayList3.iterator();
                    while (it.hasNext()) {
                        RemoteInput remoteInput = (RemoteInput) it.next();
                        if (remoteInput.l()) {
                            arrayList.add(remoteInput);
                        } else {
                            arrayList2.add(remoteInput);
                        }
                    }
                }
                RemoteInput[] remoteInputArr2 = null;
                if (arrayList.isEmpty()) {
                    remoteInputArr = null;
                } else {
                    remoteInputArr = (RemoteInput[]) arrayList.toArray(new RemoteInput[arrayList.size()]);
                }
                if (!arrayList2.isEmpty()) {
                    remoteInputArr2 = (RemoteInput[]) arrayList2.toArray(new RemoteInput[arrayList2.size()]);
                }
                return new Action(this.f2957a, this.f2958b, this.f2959c, this.f2961e, remoteInputArr2, remoteInputArr, this.f2960d, this.f2963g, this.f2964h, this.f2965i, this.f2966j);
            }

            public a f(boolean z10) {
                this.f2960d = z10;
                return this;
            }

            public a g(boolean z10) {
                this.f2966j = z10;
                return this;
            }

            public a h(boolean z10) {
                this.f2965i = z10;
                return this;
            }

            public a i(int i10) {
                this.f2963g = i10;
                return this;
            }

            public a j(boolean z10) {
                this.f2964h = z10;
                return this;
            }

            public a(int i10, CharSequence charSequence, PendingIntent pendingIntent) {
                this(i10 != 0 ? IconCompat.l(null, "", i10) : null, charSequence, pendingIntent, new Bundle(), null, true, 0, true, false, false);
            }

            private a(IconCompat iconCompat, CharSequence charSequence, PendingIntent pendingIntent, Bundle bundle, RemoteInput[] remoteInputArr, boolean z10, int i10, boolean z11, boolean z12, boolean z13) {
                this.f2960d = true;
                this.f2964h = true;
                this.f2957a = iconCompat;
                this.f2958b = Builder.k(charSequence);
                this.f2959c = pendingIntent;
                this.f2961e = bundle;
                this.f2962f = remoteInputArr == null ? null : new ArrayList(Arrays.asList(remoteInputArr));
                this.f2960d = z10;
                this.f2963g = i10;
                this.f2964h = z11;
                this.f2965i = z12;
                this.f2966j = z13;
            }
        }

        public Action(int i10, CharSequence charSequence, PendingIntent pendingIntent) {
            this(i10 != 0 ? IconCompat.l(null, "", i10) : null, charSequence, pendingIntent);
        }

        public PendingIntent a() {
            return this.f2955k;
        }

        public boolean b() {
            return this.f2949e;
        }

        public Bundle c() {
            return this.f2945a;
        }

        public IconCompat d() {
            int i10;
            if (this.f2946b == null && (i10 = this.f2953i) != 0) {
                this.f2946b = IconCompat.l(null, "", i10);
            }
            return this.f2946b;
        }

        public RemoteInput[] e() {
            return this.f2947c;
        }

        public int f() {
            return this.f2951g;
        }

        public boolean g() {
            return this.f2950f;
        }

        public CharSequence h() {
            return this.f2954j;
        }

        public boolean i() {
            return this.f2956l;
        }

        public boolean j() {
            return this.f2952h;
        }

        public Action(IconCompat iconCompat, CharSequence charSequence, PendingIntent pendingIntent) {
            this(iconCompat, charSequence, pendingIntent, new Bundle(), (RemoteInput[]) null, (RemoteInput[]) null, true, 0, true, false, false);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public Action(int i10, CharSequence charSequence, PendingIntent pendingIntent, Bundle bundle, RemoteInput[] remoteInputArr, RemoteInput[] remoteInputArr2, boolean z10, int i11, boolean z11, boolean z12, boolean z13) {
            this(i10 != 0 ? IconCompat.l(null, "", i10) : null, charSequence, pendingIntent, bundle, remoteInputArr, remoteInputArr2, z10, i11, z11, z12, z13);
        }

        Action(IconCompat iconCompat, CharSequence charSequence, PendingIntent pendingIntent, Bundle bundle, RemoteInput[] remoteInputArr, RemoteInput[] remoteInputArr2, boolean z10, int i10, boolean z11, boolean z12, boolean z13) {
            this.f2950f = true;
            this.f2946b = iconCompat;
            if (iconCompat != null && iconCompat.p() == 2) {
                this.f2953i = iconCompat.n();
            }
            this.f2954j = Builder.k(charSequence);
            this.f2955k = pendingIntent;
            this.f2945a = bundle == null ? new Bundle() : bundle;
            this.f2947c = remoteInputArr;
            this.f2948d = remoteInputArr2;
            this.f2949e = z10;
            this.f2951g = i10;
            this.f2950f = z11;
            this.f2952h = z12;
            this.f2956l = z13;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static String a(Notification notification) {
            return notification.getGroup();
        }

        static String b(Notification notification) {
            return notification.getSortKey();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static int a(Notification notification) {
            return notification.getBadgeIconType();
        }

        static String b(Notification notification) {
            return notification.getChannelId();
        }

        static CharSequence c(Notification notification) {
            return notification.getSettingsText();
        }

        static String d(Notification notification) {
            return notification.getShortcutId();
        }

        static long e(Notification notification) {
            return notification.getTimeoutAfter();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        static boolean a(Notification notification) {
            return notification.getAllowSystemGeneratedContextualActions();
        }

        static Notification.BubbleMetadata b(Notification notification) {
            return notification.getBubbleMetadata();
        }

        static LocusId c(Notification notification) {
            return notification.getLocusId();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e extends l {

        /* renamed from: e  reason: collision with root package name */
        private IconCompat f3004e;

        /* renamed from: f  reason: collision with root package name */
        private IconCompat f3005f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f3006g;

        /* renamed from: h  reason: collision with root package name */
        private CharSequence f3007h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f3008i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        private static class a {
            static void a(Notification.BigPictureStyle bigPictureStyle, Icon icon) {
                bigPictureStyle.bigLargeIcon(icon);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        private static class b {
            static void a(Notification.BigPictureStyle bigPictureStyle, Icon icon) {
                bigPictureStyle.bigPicture(icon);
            }

            static void b(Notification.BigPictureStyle bigPictureStyle, CharSequence charSequence) {
                bigPictureStyle.setContentDescription(charSequence);
            }

            static void c(Notification.BigPictureStyle bigPictureStyle, boolean z10) {
                bigPictureStyle.showBigPictureWhenCollapsed(z10);
            }
        }

        private static IconCompat o(Parcelable parcelable) {
            if (parcelable != null) {
                if (parcelable instanceof Icon) {
                    return IconCompat.b((Icon) parcelable);
                }
                if (parcelable instanceof Bitmap) {
                    return IconCompat.h((Bitmap) parcelable);
                }
                return null;
            }
            return null;
        }

        public static IconCompat r(Bundle bundle) {
            if (bundle == null) {
                return null;
            }
            Parcelable parcelable = bundle.getParcelable("android.picture");
            if (parcelable != null) {
                return o(parcelable);
            }
            return o(bundle.getParcelable("android.pictureIcon"));
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void b(androidx.core.app.j jVar) {
            Context context;
            Notification.BigPictureStyle bigContentTitle = new Notification.BigPictureStyle(jVar.a()).setBigContentTitle(this.f3050b);
            IconCompat iconCompat = this.f3004e;
            Context context2 = null;
            if (iconCompat != null) {
                if (Build.VERSION.SDK_INT >= 31) {
                    if (jVar instanceof o) {
                        context = ((o) jVar).f();
                    } else {
                        context = null;
                    }
                    b.a(bigContentTitle, this.f3004e.w(context));
                } else if (iconCompat.p() == 1) {
                    bigContentTitle = bigContentTitle.bigPicture(this.f3004e.m());
                }
            }
            if (this.f3006g) {
                if (this.f3005f == null) {
                    bigContentTitle.bigLargeIcon((Bitmap) null);
                } else {
                    if (jVar instanceof o) {
                        context2 = ((o) jVar).f();
                    }
                    a.a(bigContentTitle, this.f3005f.w(context2));
                }
            }
            if (this.f3052d) {
                bigContentTitle.setSummaryText(this.f3051c);
            }
            if (Build.VERSION.SDK_INT >= 31) {
                b.c(bigContentTitle, this.f3008i);
                b.b(bigContentTitle, this.f3007h);
            }
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void c(Bundle bundle) {
            super.c(bundle);
            bundle.remove("android.largeIcon.big");
            bundle.remove("android.picture");
            bundle.remove("android.pictureIcon");
            bundle.remove("android.showBigPictureWhenCollapsed");
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected String i() {
            return "androidx.core.app.NotificationCompat$BigPictureStyle";
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void m(Bundle bundle) {
            super.m(bundle);
            if (bundle.containsKey("android.largeIcon.big")) {
                this.f3005f = o(bundle.getParcelable("android.largeIcon.big"));
                this.f3006g = true;
            }
            this.f3004e = r(bundle);
            this.f3008i = bundle.getBoolean("android.showBigPictureWhenCollapsed");
        }

        public e p(Bitmap bitmap) {
            IconCompat h10;
            if (bitmap == null) {
                h10 = null;
            } else {
                h10 = IconCompat.h(bitmap);
            }
            this.f3005f = h10;
            this.f3006g = true;
            return this;
        }

        public e q(Bitmap bitmap) {
            IconCompat h10;
            if (bitmap == null) {
                h10 = null;
            } else {
                h10 = IconCompat.h(bitmap);
            }
            this.f3004e = h10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f extends l {

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f3009e;

        @Override // androidx.core.app.NotificationCompat.l
        public void a(Bundle bundle) {
            super.a(bundle);
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void b(androidx.core.app.j jVar) {
            Notification.BigTextStyle bigText = new Notification.BigTextStyle(jVar.a()).setBigContentTitle(this.f3050b).bigText(this.f3009e);
            if (this.f3052d) {
                bigText.setSummaryText(this.f3051c);
            }
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void c(Bundle bundle) {
            super.c(bundle);
            bundle.remove("android.bigText");
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected String i() {
            return "androidx.core.app.NotificationCompat$BigTextStyle";
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void m(Bundle bundle) {
            super.m(bundle);
            this.f3009e = bundle.getCharSequence("android.bigText");
        }

        public f o(CharSequence charSequence) {
            this.f3009e = Builder.k(charSequence);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        private PendingIntent f3010a;

        /* renamed from: b  reason: collision with root package name */
        private PendingIntent f3011b;

        /* renamed from: c  reason: collision with root package name */
        private IconCompat f3012c;

        /* renamed from: d  reason: collision with root package name */
        private int f3013d;

        /* renamed from: e  reason: collision with root package name */
        private int f3014e;

        /* renamed from: f  reason: collision with root package name */
        private int f3015f;

        /* renamed from: g  reason: collision with root package name */
        private String f3016g;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {
            static g a(Notification.BubbleMetadata bubbleMetadata) {
                if (bubbleMetadata == null || bubbleMetadata.getIntent() == null) {
                    return null;
                }
                c g10 = new c(bubbleMetadata.getIntent(), IconCompat.b(bubbleMetadata.getIcon())).b(bubbleMetadata.getAutoExpandBubble()).c(bubbleMetadata.getDeleteIntent()).g(bubbleMetadata.isNotificationSuppressed());
                if (bubbleMetadata.getDesiredHeight() != 0) {
                    g10.d(bubbleMetadata.getDesiredHeight());
                }
                if (bubbleMetadata.getDesiredHeightResId() != 0) {
                    g10.e(bubbleMetadata.getDesiredHeightResId());
                }
                return g10.a();
            }

            static Notification.BubbleMetadata b(g gVar) {
                if (gVar == null || gVar.g() == null) {
                    return null;
                }
                Notification.BubbleMetadata.Builder suppressNotification = new Notification.BubbleMetadata.Builder().setIcon(gVar.f().v()).setIntent(gVar.g()).setDeleteIntent(gVar.c()).setAutoExpandBubble(gVar.b()).setSuppressNotification(gVar.i());
                if (gVar.d() != 0) {
                    suppressNotification.setDesiredHeight(gVar.d());
                }
                if (gVar.e() != 0) {
                    suppressNotification.setDesiredHeightResId(gVar.e());
                }
                return suppressNotification.build();
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class b {
            static g a(Notification.BubbleMetadata bubbleMetadata) {
                c cVar;
                if (bubbleMetadata == null) {
                    return null;
                }
                if (bubbleMetadata.getShortcutId() != null) {
                    cVar = new c(bubbleMetadata.getShortcutId());
                } else {
                    cVar = new c(bubbleMetadata.getIntent(), IconCompat.b(bubbleMetadata.getIcon()));
                }
                cVar.b(bubbleMetadata.getAutoExpandBubble()).c(bubbleMetadata.getDeleteIntent()).g(bubbleMetadata.isNotificationSuppressed());
                if (bubbleMetadata.getDesiredHeight() != 0) {
                    cVar.d(bubbleMetadata.getDesiredHeight());
                }
                if (bubbleMetadata.getDesiredHeightResId() != 0) {
                    cVar.e(bubbleMetadata.getDesiredHeightResId());
                }
                return cVar.a();
            }

            static Notification.BubbleMetadata b(g gVar) {
                Notification.BubbleMetadata.Builder builder;
                if (gVar == null) {
                    return null;
                }
                if (gVar.h() != null) {
                    builder = new Notification.BubbleMetadata.Builder(gVar.h());
                } else {
                    builder = new Notification.BubbleMetadata.Builder(gVar.g(), gVar.f().v());
                }
                builder.setDeleteIntent(gVar.c()).setAutoExpandBubble(gVar.b()).setSuppressNotification(gVar.i());
                if (gVar.d() != 0) {
                    builder.setDesiredHeight(gVar.d());
                }
                if (gVar.e() != 0) {
                    builder.setDesiredHeightResId(gVar.e());
                }
                return builder.build();
            }
        }

        public static g a(Notification.BubbleMetadata bubbleMetadata) {
            if (bubbleMetadata == null) {
                return null;
            }
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 30) {
                return b.a(bubbleMetadata);
            }
            if (i10 != 29) {
                return null;
            }
            return a.a(bubbleMetadata);
        }

        public static Notification.BubbleMetadata k(g gVar) {
            if (gVar == null) {
                return null;
            }
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 30) {
                return b.b(gVar);
            }
            if (i10 != 29) {
                return null;
            }
            return a.b(gVar);
        }

        public boolean b() {
            if ((this.f3015f & 1) != 0) {
                return true;
            }
            return false;
        }

        public PendingIntent c() {
            return this.f3011b;
        }

        public int d() {
            return this.f3013d;
        }

        public int e() {
            return this.f3014e;
        }

        public IconCompat f() {
            return this.f3012c;
        }

        public PendingIntent g() {
            return this.f3010a;
        }

        public String h() {
            return this.f3016g;
        }

        public boolean i() {
            if ((this.f3015f & 2) != 0) {
                return true;
            }
            return false;
        }

        public void j(int i10) {
            this.f3015f = i10;
        }

        private g(PendingIntent pendingIntent, PendingIntent pendingIntent2, IconCompat iconCompat, int i10, int i11, int i12, String str) {
            this.f3010a = pendingIntent;
            this.f3012c = iconCompat;
            this.f3013d = i10;
            this.f3014e = i11;
            this.f3011b = pendingIntent2;
            this.f3015f = i12;
            this.f3016g = str;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class c {

            /* renamed from: a  reason: collision with root package name */
            private PendingIntent f3017a;

            /* renamed from: b  reason: collision with root package name */
            private IconCompat f3018b;

            /* renamed from: c  reason: collision with root package name */
            private int f3019c;

            /* renamed from: d  reason: collision with root package name */
            private int f3020d;

            /* renamed from: e  reason: collision with root package name */
            private int f3021e;

            /* renamed from: f  reason: collision with root package name */
            private PendingIntent f3022f;

            /* renamed from: g  reason: collision with root package name */
            private String f3023g;

            public c(String str) {
                if (!TextUtils.isEmpty(str)) {
                    this.f3023g = str;
                    return;
                }
                throw new NullPointerException("Bubble requires a non-null shortcut id");
            }

            private c f(int i10, boolean z10) {
                if (z10) {
                    this.f3021e = i10 | this.f3021e;
                    return this;
                }
                this.f3021e = (~i10) & this.f3021e;
                return this;
            }

            public g a() {
                String str = this.f3023g;
                if (str == null && this.f3017a == null) {
                    throw new NullPointerException("Must supply pending intent or shortcut to bubble");
                }
                if (str == null && this.f3018b == null) {
                    throw new NullPointerException("Must supply an icon or shortcut for the bubble");
                }
                g gVar = new g(this.f3017a, this.f3022f, this.f3018b, this.f3019c, this.f3020d, this.f3021e, str);
                gVar.j(this.f3021e);
                return gVar;
            }

            public c b(boolean z10) {
                f(1, z10);
                return this;
            }

            public c c(PendingIntent pendingIntent) {
                this.f3022f = pendingIntent;
                return this;
            }

            public c d(int i10) {
                this.f3019c = Math.max(i10, 0);
                this.f3020d = 0;
                return this;
            }

            public c e(int i10) {
                this.f3020d = i10;
                this.f3019c = 0;
                return this;
            }

            public c g(boolean z10) {
                f(2, z10);
                return this;
            }

            public c(PendingIntent pendingIntent, IconCompat iconCompat) {
                if (pendingIntent == null) {
                    throw new NullPointerException("Bubble requires non-null pending intent");
                }
                if (iconCompat != null) {
                    this.f3017a = pendingIntent;
                    this.f3018b = iconCompat;
                    return;
                }
                throw new NullPointerException("Bubbles require non-null icon");
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h extends l {

        /* renamed from: e  reason: collision with root package name */
        private int f3024e;

        /* renamed from: f  reason: collision with root package name */
        private Person f3025f;

        /* renamed from: g  reason: collision with root package name */
        private PendingIntent f3026g;

        /* renamed from: h  reason: collision with root package name */
        private PendingIntent f3027h;

        /* renamed from: i  reason: collision with root package name */
        private PendingIntent f3028i;

        /* renamed from: j  reason: collision with root package name */
        private boolean f3029j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f3030k;

        /* renamed from: l  reason: collision with root package name */
        private Integer f3031l;

        /* renamed from: m  reason: collision with root package name */
        private IconCompat f3032m;

        /* renamed from: n  reason: collision with root package name */
        private CharSequence f3033n;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class a {
            static Notification.Builder a(Notification.Builder builder, String str) {
                return builder.addPerson(str);
            }

            static Notification.Builder b(Notification.Builder builder, String str) {
                return builder.setCategory(str);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class b {
            static Parcelable a(Icon icon) {
                return icon;
            }

            static void b(Notification.Builder builder, Icon icon) {
                builder.setLargeIcon(icon);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class c {
            static Notification.Builder a(Notification.Builder builder, android.app.Person person) {
                return builder.addPerson(person);
            }

            static Parcelable b(android.app.Person person) {
                return person;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class d {
            static Notification.CallStyle a(android.app.Person person, PendingIntent pendingIntent, PendingIntent pendingIntent2) {
                return Notification.CallStyle.forIncomingCall(person, pendingIntent, pendingIntent2);
            }

            static Notification.CallStyle b(android.app.Person person, PendingIntent pendingIntent) {
                return Notification.CallStyle.forOngoingCall(person, pendingIntent);
            }

            static Notification.CallStyle c(android.app.Person person, PendingIntent pendingIntent, PendingIntent pendingIntent2) {
                return Notification.CallStyle.forScreeningCall(person, pendingIntent, pendingIntent2);
            }

            static Notification.CallStyle d(Notification.CallStyle callStyle, int i10) {
                return callStyle.setAnswerButtonColorHint(i10);
            }

            static Notification.CallStyle e(Notification.CallStyle callStyle, int i10) {
                return callStyle.setDeclineButtonColorHint(i10);
            }

            static Notification.CallStyle f(Notification.CallStyle callStyle, boolean z10) {
                return callStyle.setIsVideo(z10);
            }

            static Notification.CallStyle g(Notification.CallStyle callStyle, Icon icon) {
                return callStyle.setVerificationIcon(icon);
            }

            static Notification.CallStyle h(Notification.CallStyle callStyle, CharSequence charSequence) {
                return callStyle.setVerificationText(charSequence);
            }
        }

        private String p() {
            int i10 = this.f3024e;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        return null;
                    }
                    return this.f3049a.f2967a.getResources().getString(o1.f.f42428g);
                }
                return this.f3049a.f2967a.getResources().getString(o1.f.f42427f);
            }
            return this.f3049a.f2967a.getResources().getString(o1.f.f42426e);
        }

        private boolean q(Action action) {
            if (action != null && action.c().getBoolean("key_action_priority")) {
                return true;
            }
            return false;
        }

        private Action r(int i10, int i11, Integer num, int i12, PendingIntent pendingIntent) {
            if (num == null) {
                num = Integer.valueOf(androidx.core.content.a.c(this.f3049a.f2967a, i12));
            }
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
            spannableStringBuilder.append((CharSequence) this.f3049a.f2967a.getResources().getString(i11));
            spannableStringBuilder.setSpan(new ForegroundColorSpan(num.intValue()), 0, spannableStringBuilder.length(), 18);
            Action c10 = new Action.a(IconCompat.k(this.f3049a.f2967a, i10), spannableStringBuilder, pendingIntent).c();
            c10.c().putBoolean("key_action_priority", true);
            return c10;
        }

        private Action s() {
            int i10;
            int i11;
            int i12 = o1.d.f42394b;
            int i13 = o1.d.f42393a;
            PendingIntent pendingIntent = this.f3026g;
            if (pendingIntent == null) {
                return null;
            }
            boolean z10 = this.f3029j;
            if (z10) {
                i10 = i12;
            } else {
                i10 = i13;
            }
            if (z10) {
                i11 = o1.f.f42423b;
            } else {
                i11 = o1.f.f42422a;
            }
            return r(i10, i11, this.f3030k, o1.b.f42389a, pendingIntent);
        }

        private Action t() {
            int i10 = o1.d.f42395c;
            PendingIntent pendingIntent = this.f3027h;
            if (pendingIntent == null) {
                return r(i10, o1.f.f42425d, this.f3031l, o1.b.f42390b, this.f3028i);
            }
            return r(i10, o1.f.f42424c, this.f3031l, o1.b.f42390b, pendingIntent);
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void a(Bundle bundle) {
            super.a(bundle);
            bundle.putInt("android.callType", this.f3024e);
            bundle.putBoolean("android.callIsVideo", this.f3029j);
            Person person = this.f3025f;
            if (person != null) {
                if (Build.VERSION.SDK_INT >= 28) {
                    bundle.putParcelable("android.callPerson", c.b(person.k()));
                } else {
                    bundle.putParcelable("android.callPersonCompat", person.l());
                }
            }
            IconCompat iconCompat = this.f3032m;
            if (iconCompat != null) {
                bundle.putParcelable("android.verificationIcon", b.a(iconCompat.w(this.f3049a.f2967a)));
            }
            bundle.putCharSequence("android.verificationText", this.f3033n);
            bundle.putParcelable("android.answerIntent", this.f3026g);
            bundle.putParcelable("android.declineIntent", this.f3027h);
            bundle.putParcelable("android.hangUpIntent", this.f3028i);
            Integer num = this.f3030k;
            if (num != null) {
                bundle.putInt("android.answerColor", num.intValue());
            }
            Integer num2 = this.f3031l;
            if (num2 != null) {
                bundle.putInt("android.declineColor", num2.intValue());
            }
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void b(androidx.core.app.j jVar) {
            CharSequence charSequence;
            int i10 = Build.VERSION.SDK_INT;
            CharSequence charSequence2 = null;
            r2 = null;
            Notification.CallStyle a10 = null;
            charSequence2 = null;
            if (i10 >= 31) {
                int i11 = this.f3024e;
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            if (Log.isLoggable("NotifCompat", 3)) {
                                Log.d("NotifCompat", "Unrecognized call type in CallStyle: " + String.valueOf(this.f3024e));
                            }
                        } else {
                            a10 = d.c(this.f3025f.k(), this.f3028i, this.f3026g);
                        }
                    } else {
                        a10 = d.b(this.f3025f.k(), this.f3028i);
                    }
                } else {
                    a10 = d.a(this.f3025f.k(), this.f3027h, this.f3026g);
                }
                if (a10 != null) {
                    a10.setBuilder(jVar.a());
                    Integer num = this.f3030k;
                    if (num != null) {
                        d.d(a10, num.intValue());
                    }
                    Integer num2 = this.f3031l;
                    if (num2 != null) {
                        d.e(a10, num2.intValue());
                    }
                    d.h(a10, this.f3033n);
                    IconCompat iconCompat = this.f3032m;
                    if (iconCompat != null) {
                        d.g(a10, iconCompat.w(this.f3049a.f2967a));
                    }
                    d.f(a10, this.f3029j);
                    return;
                }
                return;
            }
            Notification.Builder a11 = jVar.a();
            Person person = this.f3025f;
            if (person != null) {
                charSequence = person.f();
            } else {
                charSequence = null;
            }
            a11.setContentTitle(charSequence);
            Bundle bundle = this.f3049a.F;
            if (bundle != null && bundle.containsKey("android.text")) {
                charSequence2 = this.f3049a.F.getCharSequence("android.text");
            }
            if (charSequence2 == null) {
                charSequence2 = p();
            }
            a11.setContentText(charSequence2);
            Person person2 = this.f3025f;
            if (person2 != null) {
                if (person2.d() != null) {
                    b.b(a11, this.f3025f.d().w(this.f3049a.f2967a));
                }
                if (i10 >= 28) {
                    c.a(a11, this.f3025f.k());
                } else {
                    a.a(a11, this.f3025f.g());
                }
            }
            a.b(a11, "call");
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected String i() {
            return "androidx.core.app.NotificationCompat$CallStyle";
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void m(Bundle bundle) {
            Integer num;
            super.m(bundle);
            this.f3024e = bundle.getInt("android.callType");
            this.f3029j = bundle.getBoolean("android.callIsVideo");
            if (Build.VERSION.SDK_INT >= 28 && bundle.containsKey("android.callPerson")) {
                this.f3025f = Person.a(androidx.core.app.l.a(bundle.getParcelable("android.callPerson")));
            } else if (bundle.containsKey("android.callPersonCompat")) {
                this.f3025f = Person.b(bundle.getBundle("android.callPersonCompat"));
            }
            if (bundle.containsKey("android.verificationIcon")) {
                this.f3032m = IconCompat.b((Icon) bundle.getParcelable("android.verificationIcon"));
            } else if (bundle.containsKey("android.verificationIconCompat")) {
                this.f3032m = IconCompat.a(bundle.getBundle("android.verificationIconCompat"));
            }
            this.f3033n = bundle.getCharSequence("android.verificationText");
            this.f3026g = (PendingIntent) bundle.getParcelable("android.answerIntent");
            this.f3027h = (PendingIntent) bundle.getParcelable("android.declineIntent");
            this.f3028i = (PendingIntent) bundle.getParcelable("android.hangUpIntent");
            Integer num2 = null;
            if (bundle.containsKey("android.answerColor")) {
                num = Integer.valueOf(bundle.getInt("android.answerColor"));
            } else {
                num = null;
            }
            this.f3030k = num;
            if (bundle.containsKey("android.declineColor")) {
                num2 = Integer.valueOf(bundle.getInt("android.declineColor"));
            }
            this.f3031l = num2;
        }

        public ArrayList o() {
            Action t10 = t();
            Action s10 = s();
            ArrayList arrayList = new ArrayList(3);
            arrayList.add(t10);
            ArrayList<Action> arrayList2 = this.f3049a.f2968b;
            int i10 = 2;
            if (arrayList2 != null) {
                for (Action action : arrayList2) {
                    if (action.j()) {
                        arrayList.add(action);
                    } else if (!q(action)) {
                        arrayList.add(action);
                        i10--;
                    }
                    if (s10 != null && i10 == 1) {
                        arrayList.add(s10);
                        i10--;
                    }
                }
            }
            if (s10 != null && i10 >= 1) {
                arrayList.add(s10);
            }
            return arrayList;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i extends l {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class a {
            static Notification.Style a() {
                return new Notification.DecoratedCustomViewStyle();
            }
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void b(androidx.core.app.j jVar) {
            jVar.a().setStyle(a.a());
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected String i() {
            return "androidx.core.app.NotificationCompat$DecoratedCustomViewStyle";
        }

        @Override // androidx.core.app.NotificationCompat.l
        public RemoteViews j(androidx.core.app.j jVar) {
            return null;
        }

        @Override // androidx.core.app.NotificationCompat.l
        public RemoteViews k(androidx.core.app.j jVar) {
            return null;
        }

        @Override // androidx.core.app.NotificationCompat.l
        public RemoteViews l(androidx.core.app.j jVar) {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class j extends l {

        /* renamed from: e  reason: collision with root package name */
        private ArrayList f3034e = new ArrayList();

        @Override // androidx.core.app.NotificationCompat.l
        public void b(androidx.core.app.j jVar) {
            Notification.InboxStyle bigContentTitle = new Notification.InboxStyle(jVar.a()).setBigContentTitle(this.f3050b);
            if (this.f3052d) {
                bigContentTitle.setSummaryText(this.f3051c);
            }
            Iterator it = this.f3034e.iterator();
            while (it.hasNext()) {
                bigContentTitle.addLine((CharSequence) it.next());
            }
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void c(Bundle bundle) {
            super.c(bundle);
            bundle.remove("android.textLines");
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected String i() {
            return "androidx.core.app.NotificationCompat$InboxStyle";
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void m(Bundle bundle) {
            super.m(bundle);
            this.f3034e.clear();
            if (bundle.containsKey("android.textLines")) {
                Collections.addAll(this.f3034e, bundle.getCharSequenceArray("android.textLines"));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class k extends l {

        /* renamed from: h  reason: collision with root package name */
        private boolean f3038h;

        /* renamed from: j  reason: collision with root package name */
        private IconCompat f3040j;

        /* renamed from: k  reason: collision with root package name */
        private IconCompat f3041k;

        /* renamed from: l  reason: collision with root package name */
        private IconCompat f3042l;

        /* renamed from: e  reason: collision with root package name */
        private List f3035e = new ArrayList();

        /* renamed from: f  reason: collision with root package name */
        private List f3036f = new ArrayList();

        /* renamed from: g  reason: collision with root package name */
        private int f3037g = 0;

        /* renamed from: i  reason: collision with root package name */
        private boolean f3039i = true;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        private static final class a {
            static void a(Notification.ProgressStyle progressStyle, int i10) {
                progressStyle.setProgress(i10);
            }

            static void b(Notification.ProgressStyle progressStyle, Icon icon) {
                progressStyle.setProgressEndIcon(icon);
            }

            static void c(Notification.ProgressStyle progressStyle, boolean z10) {
                progressStyle.setProgressIndeterminate(z10);
            }

            static void d(Notification.ProgressStyle progressStyle, List<b> list) {
                for (b bVar : list) {
                    progressStyle.addProgressPoint(new Notification.ProgressStyle.Point(bVar.c()).setColor(bVar.a()).setId(bVar.b()));
                }
            }

            static void e(Notification.ProgressStyle progressStyle, List<c> list) {
                for (c cVar : list) {
                    progressStyle.addProgressSegment(new Notification.ProgressStyle.Segment(cVar.c()).setColor(cVar.a()).setId(cVar.b()));
                }
            }

            static void f(Notification.ProgressStyle progressStyle, Icon icon) {
                progressStyle.setProgressStartIcon(icon);
            }

            static void g(Notification.ProgressStyle progressStyle, Icon icon) {
                progressStyle.setProgressTrackerIcon(icon);
            }

            static void h(Notification.ProgressStyle progressStyle, boolean z10) {
                progressStyle.setStyledByProgress(z10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b {

            /* renamed from: a  reason: collision with root package name */
            private int f3043a;

            /* renamed from: b  reason: collision with root package name */
            private int f3044b = 0;

            /* renamed from: c  reason: collision with root package name */
            private int f3045c = 0;

            public b(int i10) {
                this.f3043a = i10;
            }

            public int a() {
                return this.f3045c;
            }

            public int b() {
                return this.f3044b;
            }

            public int c() {
                return this.f3043a;
            }

            public b d(int i10) {
                this.f3045c = i10;
                return this;
            }

            public b e(int i10) {
                this.f3044b = i10;
                return this;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class c {

            /* renamed from: a  reason: collision with root package name */
            private int f3046a;

            /* renamed from: b  reason: collision with root package name */
            private int f3047b = 0;

            /* renamed from: c  reason: collision with root package name */
            private int f3048c = 0;

            public c(int i10) {
                this.f3046a = i10;
            }

            public int a() {
                return this.f3048c;
            }

            public int b() {
                return this.f3047b;
            }

            public int c() {
                return this.f3046a;
            }

            public c d(int i10) {
                this.f3048c = i10;
                return this;
            }

            public c e(int i10) {
                this.f3047b = i10;
                return this;
            }
        }

        private static IconCompat o(Parcelable parcelable) {
            if (parcelable != null) {
                if (parcelable instanceof Icon) {
                    return IconCompat.b((Icon) parcelable);
                }
                if (parcelable instanceof Bitmap) {
                    return IconCompat.h((Bitmap) parcelable);
                }
                return null;
            }
            return null;
        }

        private static ArrayList q(List list) {
            ArrayList arrayList = new ArrayList();
            if (list != null && !list.isEmpty()) {
                for (int i10 = 0; i10 < list.size(); i10++) {
                    b bVar = (b) list.get(i10);
                    if (bVar.c() >= 0) {
                        Bundle bundle = new Bundle();
                        bundle.putInt(ViewProps.POSITION, bVar.c());
                        bundle.putInt(StackTraceHelper.ID_KEY, bVar.b());
                        bundle.putInt("colorInt", bVar.a());
                        arrayList.add(bundle);
                    }
                }
            }
            return arrayList;
        }

        private static List r(List list) {
            ArrayList arrayList = new ArrayList();
            if (list != null && !list.isEmpty()) {
                for (int i10 = 0; i10 < list.size(); i10++) {
                    Bundle bundle = (Bundle) list.get(i10);
                    int i11 = bundle.getInt(ViewProps.POSITION);
                    if (i11 >= 0) {
                        arrayList.add(new b(i11).e(bundle.getInt(StackTraceHelper.ID_KEY)).d(bundle.getInt("colorInt", 0)));
                    }
                }
            }
            return arrayList;
        }

        private static ArrayList s(List list) {
            ArrayList arrayList = new ArrayList();
            if (list != null && !list.isEmpty()) {
                for (int i10 = 0; i10 < list.size(); i10++) {
                    c cVar = (c) list.get(i10);
                    if (cVar.c() > 0) {
                        Bundle bundle = new Bundle();
                        bundle.putInt("length", cVar.c());
                        bundle.putInt(StackTraceHelper.ID_KEY, cVar.b());
                        bundle.putInt("colorInt", cVar.a());
                        arrayList.add(bundle);
                    }
                }
            }
            return arrayList;
        }

        private static List t(List list) {
            ArrayList arrayList = new ArrayList();
            if (list != null && !list.isEmpty()) {
                for (int i10 = 0; i10 < list.size(); i10++) {
                    Bundle bundle = (Bundle) list.get(i10);
                    int i11 = bundle.getInt("length");
                    if (i11 > 0) {
                        arrayList.add(new c(i11).e(bundle.getInt(StackTraceHelper.ID_KEY)).d(bundle.getInt("colorInt", 0)));
                    }
                }
            }
            return arrayList;
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void a(Bundle bundle) {
            Context context;
            super.a(bundle);
            if (Build.VERSION.SDK_INT < 36) {
                bundle.putParcelableArrayList("android.progressSegments", s(this.f3035e));
                bundle.putParcelableArrayList("android.progressPoints", q(this.f3036f));
                bundle.putInt("android.progress", this.f3037g);
                bundle.putBoolean("android.progressIndeterminate", this.f3038h);
                bundle.putInt("android.progressMax", p());
                bundle.putBoolean("android.styledByProgress", this.f3039i);
                Builder builder = this.f3049a;
                if (builder != null) {
                    context = builder.f2967a;
                } else {
                    context = null;
                }
                if (context != null) {
                    IconCompat iconCompat = this.f3040j;
                    if (iconCompat != null) {
                        bundle.putParcelable("android.progressTrackerIcon", iconCompat.w(context));
                    } else {
                        bundle.remove("android.progressTrackerIcon");
                    }
                    IconCompat iconCompat2 = this.f3041k;
                    if (iconCompat2 != null) {
                        bundle.putParcelable("android.progressStartIcon", iconCompat2.w(context));
                    } else {
                        bundle.remove("android.progressStartIcon");
                    }
                    IconCompat iconCompat3 = this.f3042l;
                    if (iconCompat3 != null) {
                        bundle.putParcelable("android.progressEndIcon", iconCompat3.w(context));
                    } else {
                        bundle.remove("android.progressEndIcon");
                    }
                }
            }
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void b(androidx.core.app.j jVar) {
            Context context;
            Icon icon;
            Icon icon2;
            Notification.Builder a10 = jVar.a();
            if (Build.VERSION.SDK_INT >= 36) {
                Icon icon3 = null;
                if (jVar instanceof o) {
                    context = ((o) jVar).f();
                } else {
                    context = null;
                }
                Notification.ProgressStyle a11 = m.a();
                a.h(a11, this.f3039i);
                a.a(a11, this.f3037g);
                a.c(a11, this.f3038h);
                IconCompat iconCompat = this.f3041k;
                if (iconCompat != null) {
                    icon = iconCompat.w(context);
                } else {
                    icon = null;
                }
                a.f(a11, icon);
                IconCompat iconCompat2 = this.f3042l;
                if (iconCompat2 != null) {
                    icon2 = iconCompat2.w(context);
                } else {
                    icon2 = null;
                }
                a.b(a11, icon2);
                IconCompat iconCompat3 = this.f3040j;
                if (iconCompat3 != null) {
                    icon3 = iconCompat3.w(context);
                }
                a.g(a11, icon3);
                a.d(a11, this.f3036f);
                a.e(a11, this.f3035e);
                a10.setStyle(a11);
                return;
            }
            int p10 = p();
            a10.setProgress(p10, Math.min(this.f3037g, p10), this.f3038h);
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void c(Bundle bundle) {
            super.c(bundle);
            bundle.remove("android.progressSegments");
            bundle.remove("android.progress");
            bundle.remove("android.styledByProgress");
            bundle.remove("android.progressTrackerIcon");
            bundle.remove("android.progressStartIcon");
            bundle.remove("android.progressEndIcon");
            bundle.remove("android.progressPoints");
            bundle.remove("android.progressIndeterminate");
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected String i() {
            return "androidx.core.app.NotificationCompat$ProgressStyle";
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void m(Bundle bundle) {
            super.m(bundle);
            this.f3035e = t(w1.b.b(bundle, "android.progressSegments", Bundle.class));
            this.f3037g = bundle.getInt("android.progress", 0);
            this.f3038h = bundle.getBoolean("android.progressIndeterminate", false);
            this.f3039i = bundle.getBoolean("android.styledByProgress", true);
            this.f3036f = r(w1.b.b(bundle, "android.progressPoints", Bundle.class));
            this.f3040j = o((Parcelable) w1.b.a(bundle, "android.progressTrackerIcon", Icon.class));
            this.f3041k = o((Parcelable) w1.b.a(bundle, "android.progressStartIcon", Icon.class));
            this.f3042l = o((Parcelable) w1.b.a(bundle, "android.progressEndIcon", Icon.class));
        }

        public int p() {
            List list = this.f3035e;
            if (list == null || list.isEmpty()) {
                return 100;
            }
            int i10 = 0;
            int i11 = 0;
            for (int i12 = 0; i12 < list.size(); i12++) {
                int c10 = ((c) list.get(i12)).c();
                if (c10 > 0) {
                    try {
                        i11 = Math.addExact(i11, c10);
                        i10++;
                    } catch (ArithmeticException unused) {
                        return 100;
                    }
                }
            }
            if (i10 == 0) {
                return 100;
            }
            return i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class l {

        /* renamed from: a  reason: collision with root package name */
        protected Builder f3049a;

        /* renamed from: b  reason: collision with root package name */
        CharSequence f3050b;

        /* renamed from: c  reason: collision with root package name */
        CharSequence f3051c;

        /* renamed from: d  reason: collision with root package name */
        boolean f3052d = false;

        static l d(String str) {
            if (str != null) {
                char c10 = 65535;
                switch (str.hashCode()) {
                    case -1915466044:
                        if (str.equals("androidx.core.app.NotificationCompat$ProgressStyle")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -716705180:
                        if (str.equals("androidx.core.app.NotificationCompat$DecoratedCustomViewStyle")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -171946061:
                        if (str.equals("androidx.core.app.NotificationCompat$BigPictureStyle")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 714386739:
                        if (str.equals("androidx.core.app.NotificationCompat$CallStyle")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 912942987:
                        if (str.equals("androidx.core.app.NotificationCompat$InboxStyle")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 919595044:
                        if (str.equals("androidx.core.app.NotificationCompat$BigTextStyle")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 2090799565:
                        if (str.equals("androidx.core.app.NotificationCompat$MessagingStyle")) {
                            c10 = 6;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        return new k();
                    case 1:
                        return new i();
                    case 2:
                        return new e();
                    case 3:
                        return new h();
                    case 4:
                        return new j();
                    case 5:
                        return new f();
                    case 6:
                        return new MessagingStyle();
                    default:
                        return null;
                }
            }
            return null;
        }

        private static l e(String str) {
            if (str == null) {
                return null;
            }
            if (str.equals(Notification.BigPictureStyle.class.getName())) {
                return new e();
            }
            if (str.equals(Notification.BigTextStyle.class.getName())) {
                return new f();
            }
            if (str.equals(Notification.InboxStyle.class.getName())) {
                return new j();
            }
            if (Build.VERSION.SDK_INT >= 36 && str.equals(n.a().getName())) {
                return new k();
            }
            if (str.equals(Notification.MessagingStyle.class.getName())) {
                return new MessagingStyle();
            }
            if (!str.equals(Notification.DecoratedCustomViewStyle.class.getName())) {
                return null;
            }
            return new i();
        }

        static l f(Bundle bundle) {
            l d10 = d(bundle.getString("androidx.core.app.extra.COMPAT_TEMPLATE"));
            if (d10 != null) {
                return d10;
            }
            if (!bundle.containsKey("android.selfDisplayName") && !bundle.containsKey("android.messagingStyleUser")) {
                if (!bundle.containsKey("android.picture") && !bundle.containsKey("android.pictureIcon")) {
                    if (bundle.containsKey("android.bigText")) {
                        return new f();
                    }
                    if (bundle.containsKey("android.textLines")) {
                        return new j();
                    }
                    if (bundle.containsKey("android.callType")) {
                        return new h();
                    }
                    if (!bundle.containsKey("android.progressSegments") && !bundle.containsKey("android.progressPoints")) {
                        return e(bundle.getString("android.template"));
                    }
                    return new k();
                }
                return new e();
            }
            return new MessagingStyle();
        }

        static l g(Bundle bundle) {
            l f10 = f(bundle);
            if (f10 == null) {
                return null;
            }
            try {
                f10.m(bundle);
                return f10;
            } catch (ClassCastException unused) {
                return null;
            }
        }

        public static l h(Notification notification) {
            Bundle k10 = NotificationCompat.k(notification);
            if (k10 == null) {
                return null;
            }
            return g(k10);
        }

        public void a(Bundle bundle) {
            if (this.f3052d) {
                bundle.putCharSequence("android.summaryText", this.f3051c);
            }
            CharSequence charSequence = this.f3050b;
            if (charSequence != null) {
                bundle.putCharSequence("android.title.big", charSequence);
            }
            String i10 = i();
            if (i10 != null) {
                bundle.putString("androidx.core.app.extra.COMPAT_TEMPLATE", i10);
            }
        }

        public abstract void b(androidx.core.app.j jVar);

        protected void c(Bundle bundle) {
            bundle.remove("android.summaryText");
            bundle.remove("android.title.big");
            bundle.remove("androidx.core.app.extra.COMPAT_TEMPLATE");
        }

        protected abstract String i();

        public RemoteViews j(androidx.core.app.j jVar) {
            return null;
        }

        public RemoteViews k(androidx.core.app.j jVar) {
            return null;
        }

        public RemoteViews l(androidx.core.app.j jVar) {
            return null;
        }

        protected void m(Bundle bundle) {
            if (bundle.containsKey("android.summaryText")) {
                this.f3051c = bundle.getCharSequence("android.summaryText");
                this.f3052d = true;
            }
            this.f3050b = bundle.getCharSequence("android.title.big");
        }

        public void n(Builder builder) {
            if (this.f3049a != builder) {
                this.f3049a = builder;
                if (builder != null) {
                    builder.Z(this);
                }
            }
        }
    }

    public static int A(Notification notification) {
        return notification.visibility;
    }

    public static boolean B(Notification notification) {
        if ((notification.flags & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            return true;
        }
        return false;
    }

    public static Bitmap C(Context context, Bitmap bitmap) {
        if (bitmap != null && Build.VERSION.SDK_INT < 27) {
            Resources resources = context.getResources();
            int dimensionPixelSize = resources.getDimensionPixelSize(o1.c.f42392b);
            int dimensionPixelSize2 = resources.getDimensionPixelSize(o1.c.f42391a);
            if (bitmap.getWidth() <= dimensionPixelSize && bitmap.getHeight() <= dimensionPixelSize2) {
                return bitmap;
            }
            double min = Math.min(dimensionPixelSize / Math.max(1, bitmap.getWidth()), dimensionPixelSize2 / Math.max(1, bitmap.getHeight()));
            return Bitmap.createScaledBitmap(bitmap, (int) Math.ceil(bitmap.getWidth() * min), (int) Math.ceil(bitmap.getHeight() * min), true);
        }
        return bitmap;
    }

    public static boolean a(Notification notification) {
        if (Build.VERSION.SDK_INT >= 29) {
            return d.a(notification);
        }
        return false;
    }

    public static boolean b(Notification notification) {
        if ((notification.flags & 16) != 0) {
            return true;
        }
        return false;
    }

    public static int c(Notification notification) {
        if (Build.VERSION.SDK_INT >= 26) {
            return c.a(notification);
        }
        return 0;
    }

    public static g d(Notification notification) {
        if (Build.VERSION.SDK_INT >= 29) {
            return g.a(d.b(notification));
        }
        return null;
    }

    public static String e(Notification notification) {
        return notification.category;
    }

    public static String f(Notification notification) {
        if (Build.VERSION.SDK_INT >= 26) {
            return c.b(notification);
        }
        return null;
    }

    public static int g(Notification notification) {
        return notification.color;
    }

    public static CharSequence h(Notification notification) {
        return notification.extras.getCharSequence("android.infoText");
    }

    public static CharSequence i(Notification notification) {
        return notification.extras.getCharSequence("android.text");
    }

    public static CharSequence j(Notification notification) {
        return notification.extras.getCharSequence("android.title");
    }

    public static Bundle k(Notification notification) {
        return notification.extras;
    }

    public static String l(Notification notification) {
        return b.a(notification);
    }

    static boolean m(Notification notification) {
        if ((notification.flags & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            return true;
        }
        return false;
    }

    public static List n(Notification notification) {
        Bundle bundle;
        ArrayList arrayList = new ArrayList();
        Bundle bundle2 = notification.extras.getBundle("android.car.EXTENSIONS");
        if (bundle2 != null && (bundle = bundle2.getBundle("invisible_actions")) != null) {
            for (int i10 = 0; i10 < bundle.size(); i10++) {
                arrayList.add(p.c(bundle.getBundle(Integer.toString(i10))));
            }
        }
        return arrayList;
    }

    public static boolean o(Notification notification) {
        if ((notification.flags & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            return true;
        }
        return false;
    }

    public static androidx.core.content.c p(Notification notification) {
        LocusId c10;
        if (Build.VERSION.SDK_INT < 29 || (c10 = d.c(notification)) == null) {
            return null;
        }
        return androidx.core.content.c.d(c10);
    }

    public static boolean q(Notification notification) {
        if ((notification.flags & 2) != 0) {
            return true;
        }
        return false;
    }

    public static boolean r(Notification notification) {
        if ((notification.flags & 8) != 0) {
            return true;
        }
        return false;
    }

    public static Notification s(Notification notification) {
        return notification.publicVersion;
    }

    public static CharSequence t(Notification notification) {
        if (Build.VERSION.SDK_INT >= 26) {
            return c.c(notification);
        }
        return null;
    }

    public static String u(Notification notification) {
        if (Build.VERSION.SDK_INT >= 26) {
            return c.d(notification);
        }
        return null;
    }

    public static boolean v(Notification notification) {
        return notification.extras.getBoolean("android.showWhen");
    }

    public static String w(Notification notification) {
        return b.b(notification);
    }

    public static CharSequence x(Notification notification) {
        return notification.extras.getCharSequence("android.subText");
    }

    public static long y(Notification notification) {
        if (Build.VERSION.SDK_INT >= 26) {
            return c.e(notification);
        }
        return 0L;
    }

    public static boolean z(Notification notification) {
        return notification.extras.getBoolean("android.showChronometer");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class MessagingStyle extends l {

        /* renamed from: e  reason: collision with root package name */
        private final List f2993e = new ArrayList();

        /* renamed from: f  reason: collision with root package name */
        private final List f2994f = new ArrayList();

        /* renamed from: g  reason: collision with root package name */
        private Person f2995g;

        /* renamed from: h  reason: collision with root package name */
        private CharSequence f2996h;

        /* renamed from: i  reason: collision with root package name */
        private Boolean f2997i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class a {
            static Notification.MessagingStyle a(Notification.MessagingStyle messagingStyle, Notification.MessagingStyle.Message message) {
                return messagingStyle.addMessage(message);
            }

            static Notification.MessagingStyle b(CharSequence charSequence) {
                return new Notification.MessagingStyle(charSequence);
            }

            static Notification.MessagingStyle c(Notification.MessagingStyle messagingStyle, CharSequence charSequence) {
                return messagingStyle.setConversationTitle(charSequence);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class b {
            static Notification.MessagingStyle a(Notification.MessagingStyle messagingStyle, Notification.MessagingStyle.Message message) {
                return messagingStyle.addHistoricMessage(message);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class c {
            static Notification.MessagingStyle a(android.app.Person person) {
                return new Notification.MessagingStyle(person);
            }

            static Notification.MessagingStyle b(Notification.MessagingStyle messagingStyle, boolean z10) {
                return messagingStyle.setGroupConversation(z10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class d {

            /* renamed from: a  reason: collision with root package name */
            private final CharSequence f2998a;

            /* renamed from: b  reason: collision with root package name */
            private final long f2999b;

            /* renamed from: c  reason: collision with root package name */
            private final Person f3000c;

            /* renamed from: d  reason: collision with root package name */
            private Bundle f3001d = new Bundle();

            /* renamed from: e  reason: collision with root package name */
            private String f3002e;

            /* renamed from: f  reason: collision with root package name */
            private Uri f3003f;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class a {
                static Notification.MessagingStyle.Message a(CharSequence charSequence, long j10, CharSequence charSequence2) {
                    return new Notification.MessagingStyle.Message(charSequence, j10, charSequence2);
                }

                static Notification.MessagingStyle.Message b(Notification.MessagingStyle.Message message, String str, Uri uri) {
                    return message.setData(str, uri);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static class b {
                static Parcelable a(android.app.Person person) {
                    return person;
                }

                static Notification.MessagingStyle.Message b(CharSequence charSequence, long j10, android.app.Person person) {
                    return new Notification.MessagingStyle.Message(charSequence, j10, person);
                }
            }

            public d(CharSequence charSequence, long j10, Person person) {
                this.f2998a = charSequence;
                this.f2999b = j10;
                this.f3000c = person;
            }

            static Bundle[] a(List list) {
                Bundle[] bundleArr = new Bundle[list.size()];
                int size = list.size();
                for (int i10 = 0; i10 < size; i10++) {
                    bundleArr[i10] = ((d) list.get(i10)).l();
                }
                return bundleArr;
            }

            static d e(Bundle bundle) {
                Person person;
                try {
                    if (bundle.containsKey("text") && bundle.containsKey("time")) {
                        if (bundle.containsKey("person")) {
                            person = Person.b(bundle.getBundle("person"));
                        } else if (bundle.containsKey("sender_person") && Build.VERSION.SDK_INT >= 28) {
                            person = Person.a(androidx.core.app.l.a(bundle.getParcelable("sender_person")));
                        } else if (bundle.containsKey("sender")) {
                            person = new Person.c().f(bundle.getCharSequence("sender")).a();
                        } else {
                            person = null;
                        }
                        d dVar = new d(bundle.getCharSequence("text"), bundle.getLong("time"), person);
                        if (bundle.containsKey("type") && bundle.containsKey("uri")) {
                            dVar.j(bundle.getString("type"), (Uri) bundle.getParcelable("uri"));
                        }
                        if (bundle.containsKey("extras")) {
                            dVar.d().putAll(bundle.getBundle("extras"));
                        }
                        return dVar;
                    }
                } catch (ClassCastException unused) {
                }
                return null;
            }

            static List f(Parcelable[] parcelableArr) {
                d e10;
                ArrayList arrayList = new ArrayList(parcelableArr.length);
                for (Parcelable parcelable : parcelableArr) {
                    if ((parcelable instanceof Bundle) && (e10 = e((Bundle) parcelable)) != null) {
                        arrayList.add(e10);
                    }
                }
                return arrayList;
            }

            private Bundle l() {
                Bundle bundle = new Bundle();
                CharSequence charSequence = this.f2998a;
                if (charSequence != null) {
                    bundle.putCharSequence("text", charSequence);
                }
                bundle.putLong("time", this.f2999b);
                Person person = this.f3000c;
                if (person != null) {
                    bundle.putCharSequence("sender", person.f());
                    if (Build.VERSION.SDK_INT >= 28) {
                        bundle.putParcelable("sender_person", b.a(this.f3000c.k()));
                    } else {
                        bundle.putBundle("person", this.f3000c.l());
                    }
                }
                String str = this.f3002e;
                if (str != null) {
                    bundle.putString("type", str);
                }
                Uri uri = this.f3003f;
                if (uri != null) {
                    bundle.putParcelable("uri", uri);
                }
                Bundle bundle2 = this.f3001d;
                if (bundle2 != null) {
                    bundle.putBundle("extras", bundle2);
                }
                return bundle;
            }

            public String b() {
                return this.f3002e;
            }

            public Uri c() {
                return this.f3003f;
            }

            public Bundle d() {
                return this.f3001d;
            }

            public Person g() {
                return this.f3000c;
            }

            public CharSequence h() {
                return this.f2998a;
            }

            public long i() {
                return this.f2999b;
            }

            public d j(String str, Uri uri) {
                this.f3002e = str;
                this.f3003f = uri;
                return this;
            }

            Notification.MessagingStyle.Message k() {
                Notification.MessagingStyle.Message a10;
                Person g10 = g();
                CharSequence charSequence = null;
                android.app.Person person = null;
                if (Build.VERSION.SDK_INT >= 28) {
                    CharSequence h10 = h();
                    long i10 = i();
                    if (g10 != null) {
                        person = g10.k();
                    }
                    a10 = b.b(h10, i10, person);
                } else {
                    CharSequence h11 = h();
                    long i11 = i();
                    if (g10 != null) {
                        charSequence = g10.f();
                    }
                    a10 = a.a(h11, i11, charSequence);
                }
                if (b() != null) {
                    a.b(a10, b(), c());
                }
                return a10;
            }
        }

        MessagingStyle() {
        }

        public static MessagingStyle p(Notification notification) {
            l h10 = l.h(notification);
            if (h10 instanceof MessagingStyle) {
                return (MessagingStyle) h10;
            }
            return null;
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void a(Bundle bundle) {
            super.a(bundle);
            bundle.putCharSequence("android.selfDisplayName", this.f2995g.f());
            bundle.putBundle("android.messagingStyleUser", this.f2995g.l());
            bundle.putCharSequence("android.hiddenConversationTitle", this.f2996h);
            if (this.f2996h != null && this.f2997i.booleanValue()) {
                bundle.putCharSequence("android.conversationTitle", this.f2996h);
            }
            if (!this.f2993e.isEmpty()) {
                bundle.putParcelableArray("android.messages", d.a(this.f2993e));
            }
            if (!this.f2994f.isEmpty()) {
                bundle.putParcelableArray("android.messages.historic", d.a(this.f2994f));
            }
            Boolean bool = this.f2997i;
            if (bool != null) {
                bundle.putBoolean("android.isGroupConversation", bool.booleanValue());
            }
        }

        @Override // androidx.core.app.NotificationCompat.l
        public void b(androidx.core.app.j jVar) {
            Notification.MessagingStyle b10;
            t(r());
            if (Build.VERSION.SDK_INT >= 28) {
                b10 = c.a(this.f2995g.k());
            } else {
                b10 = a.b(this.f2995g.f());
            }
            for (d dVar : this.f2993e) {
                a.a(b10, dVar.k());
            }
            if (Build.VERSION.SDK_INT >= 26) {
                for (d dVar2 : this.f2994f) {
                    b.a(b10, dVar2.k());
                }
            }
            if (this.f2997i.booleanValue() || Build.VERSION.SDK_INT >= 28) {
                a.c(b10, this.f2996h);
            }
            if (Build.VERSION.SDK_INT >= 28) {
                c.b(b10, this.f2997i.booleanValue());
            }
            b10.setBuilder(jVar.a());
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void c(Bundle bundle) {
            super.c(bundle);
            bundle.remove("android.messagingStyleUser");
            bundle.remove("android.selfDisplayName");
            bundle.remove("android.conversationTitle");
            bundle.remove("android.hiddenConversationTitle");
            bundle.remove("android.messages");
            bundle.remove("android.messages.historic");
            bundle.remove("android.isGroupConversation");
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected String i() {
            return "androidx.core.app.NotificationCompat$MessagingStyle";
        }

        @Override // androidx.core.app.NotificationCompat.l
        protected void m(Bundle bundle) {
            super.m(bundle);
            this.f2993e.clear();
            if (bundle.containsKey("android.messagingStyleUser")) {
                this.f2995g = Person.b(bundle.getBundle("android.messagingStyleUser"));
            } else {
                this.f2995g = new Person.c().f(bundle.getString("android.selfDisplayName")).a();
            }
            CharSequence charSequence = bundle.getCharSequence("android.conversationTitle");
            this.f2996h = charSequence;
            if (charSequence == null) {
                this.f2996h = bundle.getCharSequence("android.hiddenConversationTitle");
            }
            Parcelable[] parcelableArray = bundle.getParcelableArray("android.messages");
            if (parcelableArray != null) {
                this.f2993e.addAll(d.f(parcelableArray));
            }
            Parcelable[] parcelableArray2 = bundle.getParcelableArray("android.messages.historic");
            if (parcelableArray2 != null) {
                this.f2994f.addAll(d.f(parcelableArray2));
            }
            if (bundle.containsKey("android.isGroupConversation")) {
                this.f2997i = Boolean.valueOf(bundle.getBoolean("android.isGroupConversation"));
            }
        }

        public MessagingStyle o(d dVar) {
            if (dVar != null) {
                this.f2993e.add(dVar);
                if (this.f2993e.size() > 25) {
                    this.f2993e.remove(0);
                }
            }
            return this;
        }

        public List q() {
            return this.f2993e;
        }

        public boolean r() {
            Builder builder = this.f3049a;
            if (builder != null && builder.f2967a.getApplicationInfo().targetSdkVersion < 28 && this.f2997i == null) {
                if (this.f2996h == null) {
                    return false;
                }
                return true;
            }
            Boolean bool = this.f2997i;
            if (bool == null) {
                return false;
            }
            return bool.booleanValue();
        }

        public MessagingStyle s(CharSequence charSequence) {
            this.f2996h = charSequence;
            return this;
        }

        public MessagingStyle t(boolean z10) {
            this.f2997i = Boolean.valueOf(z10);
            return this;
        }

        public MessagingStyle(Person person) {
            if (!TextUtils.isEmpty(person.f())) {
                this.f2995g = person;
                return;
            }
            throw new IllegalArgumentException("User's name must not be empty.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class Builder {
        String A;
        boolean B;
        boolean C;
        boolean D;
        String E;
        Bundle F;
        int G;
        int H;
        Notification I;
        RemoteViews J;
        RemoteViews K;
        RemoteViews L;
        String M;
        int N;
        String O;
        androidx.core.content.c P;
        long Q;
        int R;
        int S;
        boolean T;
        g U;
        Notification V;
        boolean W;
        Object X;
        public ArrayList Y;

        /* renamed from: a  reason: collision with root package name */
        public Context f2967a;

        /* renamed from: b  reason: collision with root package name */
        public ArrayList f2968b;

        /* renamed from: c  reason: collision with root package name */
        public ArrayList f2969c;

        /* renamed from: d  reason: collision with root package name */
        ArrayList f2970d;

        /* renamed from: e  reason: collision with root package name */
        CharSequence f2971e;

        /* renamed from: f  reason: collision with root package name */
        CharSequence f2972f;

        /* renamed from: g  reason: collision with root package name */
        String f2973g;

        /* renamed from: h  reason: collision with root package name */
        PendingIntent f2974h;

        /* renamed from: i  reason: collision with root package name */
        PendingIntent f2975i;

        /* renamed from: j  reason: collision with root package name */
        RemoteViews f2976j;

        /* renamed from: k  reason: collision with root package name */
        IconCompat f2977k;

        /* renamed from: l  reason: collision with root package name */
        CharSequence f2978l;

        /* renamed from: m  reason: collision with root package name */
        int f2979m;

        /* renamed from: n  reason: collision with root package name */
        int f2980n;

        /* renamed from: o  reason: collision with root package name */
        boolean f2981o;

        /* renamed from: p  reason: collision with root package name */
        boolean f2982p;

        /* renamed from: q  reason: collision with root package name */
        boolean f2983q;

        /* renamed from: r  reason: collision with root package name */
        l f2984r;

        /* renamed from: s  reason: collision with root package name */
        CharSequence f2985s;

        /* renamed from: t  reason: collision with root package name */
        CharSequence f2986t;

        /* renamed from: u  reason: collision with root package name */
        CharSequence[] f2987u;

        /* renamed from: v  reason: collision with root package name */
        int f2988v;

        /* renamed from: w  reason: collision with root package name */
        int f2989w;

        /* renamed from: x  reason: collision with root package name */
        boolean f2990x;

        /* renamed from: y  reason: collision with root package name */
        String f2991y;

        /* renamed from: z  reason: collision with root package name */
        boolean f2992z;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {
            static AudioAttributes a(AudioAttributes.Builder builder) {
                return builder.build();
            }

            static AudioAttributes.Builder b() {
                return new AudioAttributes.Builder();
            }

            static AudioAttributes.Builder c(AudioAttributes.Builder builder, int i10) {
                return builder.setContentType(i10);
            }

            static AudioAttributes.Builder d(AudioAttributes.Builder builder, int i10) {
                return builder.setLegacyStreamType(i10);
            }

            static AudioAttributes.Builder e(AudioAttributes.Builder builder, int i10) {
                return builder.setUsage(i10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class b {
            static Icon a(Notification notification) {
                return notification.getLargeIcon();
            }

            static Icon b(Notification notification) {
                return notification.getSmallIcon();
            }
        }

        public Builder(Context context, Notification notification) {
            this(context, NotificationCompat.f(notification));
            ArrayList parcelableArrayList;
            Bundle bundle = notification.extras;
            l h10 = l.h(notification);
            x(NotificationCompat.j(notification)).w(NotificationCompat.i(notification)).u(NotificationCompat.h(notification)).a0(NotificationCompat.x(notification)).P(NotificationCompat.t(notification)).Z(h10).D(NotificationCompat.l(notification)).E(NotificationCompat.B(notification)).I(NotificationCompat.p(notification)).g0(notification.when).S(NotificationCompat.v(notification)).d0(NotificationCompat.z(notification)).m(NotificationCompat.b(notification)).L(NotificationCompat.r(notification)).K(NotificationCompat.q(notification)).H(NotificationCompat.o(notification)).F(notification.largeIcon).n(NotificationCompat.c(notification)).p(NotificationCompat.e(notification)).o(NotificationCompat.d(notification)).J(notification.number).b0(notification.tickerText).v(notification.contentIntent).z(notification.deleteIntent).C(notification.fullScreenIntent, NotificationCompat.m(notification)).Y(notification.sound, notification.audioStreamType).e0(notification.vibrate).G(notification.ledARGB, notification.ledOnMS, notification.ledOffMS).y(notification.defaults).M(notification.priority).s(NotificationCompat.g(notification)).f0(NotificationCompat.A(notification)).O(NotificationCompat.s(notification)).W(NotificationCompat.w(notification)).c0(NotificationCompat.y(notification)).R(NotificationCompat.u(notification)).N(bundle.getInt("android.progressMax"), bundle.getInt("android.progress"), bundle.getBoolean("android.progressIndeterminate")).l(NotificationCompat.a(notification)).V(notification.icon, notification.iconLevel).c(j(notification, h10));
            this.X = b.b(notification);
            Icon a10 = b.a(notification);
            if (a10 != null) {
                this.f2977k = IconCompat.b(a10);
            }
            Notification.Action[] actionArr = notification.actions;
            if (actionArr != null && actionArr.length != 0) {
                for (Notification.Action action : actionArr) {
                    b(Action.a.e(action).c());
                }
            }
            List<Action> n10 = NotificationCompat.n(notification);
            if (!n10.isEmpty()) {
                for (Action action2 : n10) {
                    d(action2);
                }
            }
            String[] stringArray = notification.extras.getStringArray("android.people");
            if (stringArray != null && stringArray.length != 0) {
                for (String str : stringArray) {
                    f(str);
                }
            }
            if (Build.VERSION.SDK_INT >= 28 && (parcelableArrayList = notification.extras.getParcelableArrayList("android.people.list")) != null && !parcelableArrayList.isEmpty()) {
                Iterator it = parcelableArrayList.iterator();
                while (it.hasNext()) {
                    e(Person.a(androidx.core.app.l.a(it.next())));
                }
            }
            int i10 = Build.VERSION.SDK_INT;
            if (bundle.containsKey("android.chronometerCountDown")) {
                r(bundle.getBoolean("android.chronometerCountDown"));
            }
            if (i10 >= 26 && bundle.containsKey("android.colorized")) {
                t(bundle.getBoolean("android.colorized"));
            }
            if (i10 < 36 || !bundle.containsKey("android.shortCriticalText")) {
                return;
            }
            Q(bundle.getString("android.shortCriticalText"));
        }

        private void B(int i10, boolean z10) {
            if (z10) {
                Notification notification = this.V;
                notification.flags = i10 | notification.flags;
                return;
            }
            Notification notification2 = this.V;
            notification2.flags = (~i10) & notification2.flags;
        }

        private static Bundle j(Notification notification, l lVar) {
            if (notification.extras == null) {
                return null;
            }
            Bundle bundle = new Bundle(notification.extras);
            bundle.remove("android.title");
            bundle.remove("android.text");
            bundle.remove("android.infoText");
            bundle.remove("android.subText");
            if (Build.VERSION.SDK_INT >= 36) {
                bundle.remove("android.shortCriticalText");
            }
            bundle.remove("android.intent.extra.CHANNEL_ID");
            bundle.remove("android.intent.extra.CHANNEL_GROUP_ID");
            bundle.remove("android.showWhen");
            bundle.remove("android.progress");
            bundle.remove("android.progressMax");
            bundle.remove("android.progressIndeterminate");
            bundle.remove("android.chronometerCountDown");
            bundle.remove("android.colorized");
            bundle.remove("android.people.list");
            bundle.remove("android.people");
            bundle.remove("android.support.sortKey");
            bundle.remove("android.support.groupKey");
            bundle.remove("android.support.isGroupSummary");
            bundle.remove("android.support.localOnly");
            bundle.remove("android.support.actionExtras");
            Bundle bundle2 = bundle.getBundle("android.car.EXTENSIONS");
            if (bundle2 != null) {
                Bundle bundle3 = new Bundle(bundle2);
                bundle3.remove("invisible_actions");
                bundle.putBundle("android.car.EXTENSIONS", bundle3);
            }
            if (lVar != null) {
                lVar.c(bundle);
            }
            return bundle;
        }

        protected static CharSequence k(CharSequence charSequence) {
            if (charSequence == null) {
                return charSequence;
            }
            if (charSequence.length() > 5120) {
                return charSequence.subSequence(0, 5120);
            }
            return charSequence;
        }

        public Builder A(Bundle bundle) {
            this.F = bundle;
            return this;
        }

        public Builder C(PendingIntent pendingIntent, boolean z10) {
            this.f2975i = pendingIntent;
            B(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, z10);
            return this;
        }

        public Builder D(String str) {
            this.f2991y = str;
            return this;
        }

        public Builder E(boolean z10) {
            this.f2992z = z10;
            return this;
        }

        public Builder F(Bitmap bitmap) {
            IconCompat h10;
            if (bitmap == null) {
                h10 = null;
            } else {
                h10 = IconCompat.h(NotificationCompat.C(this.f2967a, bitmap));
            }
            this.f2977k = h10;
            return this;
        }

        public Builder G(int i10, int i11, int i12) {
            int i13;
            Notification notification = this.V;
            notification.ledARGB = i10;
            notification.ledOnMS = i11;
            notification.ledOffMS = i12;
            if (i11 != 0 && i12 != 0) {
                i13 = 1;
            } else {
                i13 = 0;
            }
            notification.flags = i13 | (notification.flags & (-2));
            return this;
        }

        public Builder H(boolean z10) {
            this.B = z10;
            return this;
        }

        public Builder I(androidx.core.content.c cVar) {
            this.P = cVar;
            return this;
        }

        public Builder J(int i10) {
            this.f2979m = i10;
            return this;
        }

        public Builder K(boolean z10) {
            B(2, z10);
            return this;
        }

        public Builder L(boolean z10) {
            B(8, z10);
            return this;
        }

        public Builder M(int i10) {
            this.f2980n = i10;
            return this;
        }

        public Builder N(int i10, int i11, boolean z10) {
            this.f2988v = i10;
            this.f2989w = i11;
            this.f2990x = z10;
            return this;
        }

        public Builder O(Notification notification) {
            this.I = notification;
            return this;
        }

        public Builder P(CharSequence charSequence) {
            this.f2986t = k(charSequence);
            return this;
        }

        public Builder Q(String str) {
            this.f2973g = str;
            if (Build.VERSION.SDK_INT < 36) {
                i().putString("android.shortCriticalText", str);
            }
            return this;
        }

        public Builder R(String str) {
            this.O = str;
            return this;
        }

        public Builder S(boolean z10) {
            this.f2981o = z10;
            return this;
        }

        public Builder T(boolean z10) {
            this.W = z10;
            return this;
        }

        public Builder U(int i10) {
            this.V.icon = i10;
            return this;
        }

        public Builder V(int i10, int i11) {
            Notification notification = this.V;
            notification.icon = i10;
            notification.iconLevel = i11;
            return this;
        }

        public Builder W(String str) {
            this.A = str;
            return this;
        }

        public Builder X(Uri uri) {
            Notification notification = this.V;
            notification.sound = uri;
            notification.audioStreamType = -1;
            AudioAttributes.Builder e10 = a.e(a.c(a.b(), 4), 5);
            this.V.audioAttributes = a.a(e10);
            return this;
        }

        public Builder Y(Uri uri, int i10) {
            Notification notification = this.V;
            notification.sound = uri;
            notification.audioStreamType = i10;
            AudioAttributes.Builder d10 = a.d(a.c(a.b(), 4), i10);
            this.V.audioAttributes = a.a(d10);
            return this;
        }

        public Builder Z(l lVar) {
            if (this.f2984r != lVar) {
                this.f2984r = lVar;
                if (lVar != null) {
                    lVar.n(this);
                }
            }
            return this;
        }

        public Builder a(int i10, CharSequence charSequence, PendingIntent pendingIntent) {
            this.f2968b.add(new Action(i10, charSequence, pendingIntent));
            return this;
        }

        public Builder a0(CharSequence charSequence) {
            this.f2985s = k(charSequence);
            return this;
        }

        public Builder b(Action action) {
            if (action != null) {
                this.f2968b.add(action);
            }
            return this;
        }

        public Builder b0(CharSequence charSequence) {
            this.V.tickerText = k(charSequence);
            return this;
        }

        public Builder c(Bundle bundle) {
            if (bundle != null) {
                Bundle bundle2 = this.F;
                if (bundle2 == null) {
                    this.F = new Bundle(bundle);
                    return this;
                }
                bundle2.putAll(bundle);
            }
            return this;
        }

        public Builder c0(long j10) {
            this.Q = j10;
            return this;
        }

        public Builder d(Action action) {
            if (action != null) {
                this.f2970d.add(action);
            }
            return this;
        }

        public Builder d0(boolean z10) {
            this.f2982p = z10;
            return this;
        }

        public Builder e(Person person) {
            if (person != null) {
                this.f2969c.add(person);
            }
            return this;
        }

        public Builder e0(long[] jArr) {
            this.V.vibrate = jArr;
            return this;
        }

        public Builder f(String str) {
            if (str != null && !str.isEmpty()) {
                this.Y.add(str);
            }
            return this;
        }

        public Builder f0(int i10) {
            this.H = i10;
            return this;
        }

        public Notification g() {
            return new o(this).c();
        }

        public Builder g0(long j10) {
            this.V.when = j10;
            return this;
        }

        public Builder h() {
            this.f2968b.clear();
            return this;
        }

        public Bundle i() {
            if (this.F == null) {
                this.F = new Bundle();
            }
            return this.F;
        }

        public Builder l(boolean z10) {
            this.T = z10;
            return this;
        }

        public Builder m(boolean z10) {
            B(16, z10);
            return this;
        }

        public Builder n(int i10) {
            this.N = i10;
            return this;
        }

        public Builder o(g gVar) {
            this.U = gVar;
            return this;
        }

        public Builder p(String str) {
            this.E = str;
            return this;
        }

        public Builder q(String str) {
            this.M = str;
            return this;
        }

        public Builder r(boolean z10) {
            this.f2983q = z10;
            i().putBoolean("android.chronometerCountDown", z10);
            return this;
        }

        public Builder s(int i10) {
            this.G = i10;
            return this;
        }

        public Builder t(boolean z10) {
            this.C = z10;
            this.D = true;
            return this;
        }

        public Builder u(CharSequence charSequence) {
            this.f2978l = k(charSequence);
            return this;
        }

        public Builder v(PendingIntent pendingIntent) {
            this.f2974h = pendingIntent;
            return this;
        }

        public Builder w(CharSequence charSequence) {
            this.f2972f = k(charSequence);
            return this;
        }

        public Builder x(CharSequence charSequence) {
            this.f2971e = k(charSequence);
            return this;
        }

        public Builder y(int i10) {
            Notification notification = this.V;
            notification.defaults = i10;
            if ((i10 & 4) != 0) {
                notification.flags |= 1;
            }
            return this;
        }

        public Builder z(PendingIntent pendingIntent) {
            this.V.deleteIntent = pendingIntent;
            return this;
        }

        public Builder(Context context, String str) {
            this.f2968b = new ArrayList();
            this.f2969c = new ArrayList();
            this.f2970d = new ArrayList();
            this.f2981o = true;
            this.B = false;
            this.G = 0;
            this.H = 0;
            this.N = 0;
            this.R = 0;
            this.S = 0;
            Notification notification = new Notification();
            this.V = notification;
            this.f2967a = context;
            this.M = str;
            notification.when = System.currentTimeMillis();
            this.V.audioStreamType = -1;
            this.f2980n = 0;
            this.Y = new ArrayList();
            this.T = true;
        }

        public Builder(Context context) {
            this(context, (String) null);
        }
    }
}
