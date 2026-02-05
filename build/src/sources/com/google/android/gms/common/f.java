package com.google.android.gms.common;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.res.Resources;
import android.util.Log;
import android.util.TypedValue;
import android.widget.ProgressBar;
import androidx.core.app.NotificationCompat;
import androidx.fragment.app.FragmentActivity;
import com.google.android.gms.common.api.GoogleApiActivity;
import ff.k0;
import ff.l0;
import gf.b0;
import gf.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends g {

    /* renamed from: c  reason: collision with root package name */
    private String f13808c;

    /* renamed from: e  reason: collision with root package name */
    private static final Object f13806e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private static final f f13807f = new f();

    /* renamed from: d  reason: collision with root package name */
    public static final int f13805d = g.f13809a;

    public static f m() {
        return f13807f;
    }

    @Override // com.google.android.gms.common.g
    public Intent b(Context context, int i10, String str) {
        return super.b(context, i10, str);
    }

    @Override // com.google.android.gms.common.g
    public PendingIntent c(Context context, int i10, int i11) {
        return super.c(context, i10, i11);
    }

    @Override // com.google.android.gms.common.g
    public final String e(int i10) {
        return super.e(i10);
    }

    @Override // com.google.android.gms.common.g
    public int g(Context context) {
        return super.g(context);
    }

    @Override // com.google.android.gms.common.g
    public int h(Context context, int i10) {
        return super.h(context, i10);
    }

    @Override // com.google.android.gms.common.g
    public final boolean j(int i10) {
        return super.j(i10);
    }

    public Dialog k(Activity activity, int i10, int i11, DialogInterface.OnCancelListener onCancelListener) {
        return p(activity, i10, e0.b(activity, b(activity, i10, "d"), i11), onCancelListener, null);
    }

    public PendingIntent l(Context context, b bVar) {
        if (bVar.f()) {
            return bVar.e();
        }
        return c(context, bVar.c(), 0);
    }

    public boolean n(Activity activity, int i10, int i11, DialogInterface.OnCancelListener onCancelListener) {
        Dialog k10 = k(activity, i10, i11, onCancelListener);
        if (k10 == null) {
            return false;
        }
        s(activity, k10, "GooglePlayServicesErrorDialog", onCancelListener);
        return true;
    }

    public void o(Context context, int i10) {
        t(context, i10, null, d(context, i10, 0, "n"));
    }

    /* JADX WARN: Multi-variable type inference failed */
    final Dialog p(Context context, int i10, e0 e0Var, DialogInterface.OnCancelListener onCancelListener, DialogInterface.OnClickListener onClickListener) {
        AlertDialog.Builder builder = null;
        if (i10 == 0) {
            return null;
        }
        TypedValue typedValue = new TypedValue();
        context.getTheme().resolveAttribute(16843529, typedValue, true);
        if ("Theme.Dialog.Alert".equals(context.getResources().getResourceEntryName(typedValue.resourceId))) {
            builder = new AlertDialog.Builder(context, 5);
        }
        if (builder == null) {
            builder = new AlertDialog.Builder(context);
        }
        builder.setMessage(b0.c(context, i10));
        if (onCancelListener != null) {
            builder.setOnCancelListener(onCancelListener);
        }
        String b10 = b0.b(context, i10);
        if (b10 != null) {
            if (e0Var == null) {
                e0Var = onClickListener;
            }
            builder.setPositiveButton(b10, e0Var);
        }
        String f10 = b0.f(context, i10);
        if (f10 != null) {
            builder.setTitle(f10);
        }
        Log.w("GoogleApiAvailability", String.format("Creating dialog for Google Play services availability issue. ConnectionResult=%s", Integer.valueOf(i10)), new IllegalArgumentException());
        return builder.create();
    }

    public final Dialog q(Activity activity, DialogInterface.OnCancelListener onCancelListener) {
        ProgressBar progressBar = new ProgressBar(activity, null, 16842874);
        progressBar.setIndeterminate(true);
        progressBar.setVisibility(0);
        AlertDialog.Builder builder = new AlertDialog.Builder(activity);
        builder.setView(progressBar);
        builder.setMessage(b0.c(activity, 18));
        builder.setPositiveButton("", (DialogInterface.OnClickListener) null);
        AlertDialog create = builder.create();
        s(activity, create, "GooglePlayServicesUpdatingDialog", onCancelListener);
        return create;
    }

    public final l0 r(Context context, k0 k0Var) {
        IntentFilter intentFilter = new IntentFilter("android.intent.action.PACKAGE_ADDED");
        intentFilter.addDataScheme("package");
        l0 l0Var = new l0(k0Var);
        fg.f.q(context, l0Var, intentFilter);
        l0Var.a(context);
        if (!i(context, "com.google.android.gms")) {
            k0Var.a();
            l0Var.b();
            return null;
        }
        return l0Var;
    }

    final void s(Activity activity, Dialog dialog, String str, DialogInterface.OnCancelListener onCancelListener) {
        try {
            if (activity instanceof FragmentActivity) {
                m.z(dialog, onCancelListener).show(((FragmentActivity) activity).getSupportFragmentManager(), str);
                return;
            }
        } catch (NoClassDefFoundError unused) {
        }
        c.a(dialog, onCancelListener).show(activity.getFragmentManager(), str);
    }

    final void t(Context context, int i10, String str, PendingIntent pendingIntent) {
        int i11;
        String str2;
        Log.w("GoogleApiAvailability", String.format("GMS core API Availability. ConnectionResult=%s, tag=%s", Integer.valueOf(i10), null), new IllegalArgumentException());
        if (i10 == 18) {
            u(context);
        } else if (pendingIntent == null) {
            if (i10 == 6) {
                Log.w("GoogleApiAvailability", "Missing resolution for ConnectionResult.RESOLUTION_REQUIRED. Call GoogleApiAvailability#showErrorNotification(Context, ConnectionResult) instead.");
            }
        } else {
            String e10 = b0.e(context, i10);
            String d10 = b0.d(context, i10);
            Resources resources = context.getResources();
            NotificationManager notificationManager = (NotificationManager) gf.q.l(context.getSystemService("notification"));
            NotificationCompat.Builder Z = new NotificationCompat.Builder(context).H(true).m(true).x(e10).Z(new NotificationCompat.f().o(d10));
            if (com.google.android.gms.common.util.g.c(context)) {
                gf.q.n(com.google.android.gms.common.util.k.b());
                Z.U(context.getApplicationInfo().icon).M(2);
                if (com.google.android.gms.common.util.g.d(context)) {
                    Z.a(cf.a.f7573a, resources.getString(cf.b.f7588o), pendingIntent);
                } else {
                    Z.v(pendingIntent);
                }
            } else {
                Z.U(17301642).b0(resources.getString(cf.b.f7581h)).g0(System.currentTimeMillis()).v(pendingIntent).w(d10);
            }
            if (com.google.android.gms.common.util.k.e()) {
                gf.q.n(com.google.android.gms.common.util.k.e());
                synchronized (f13806e) {
                    str2 = this.f13808c;
                }
                if (str2 == null) {
                    str2 = "com.google.android.gms.availability";
                    NotificationChannel notificationChannel = notificationManager.getNotificationChannel("com.google.android.gms.availability");
                    String string = context.getResources().getString(cf.b.f7580g);
                    if (notificationChannel == null) {
                        notificationManager.createNotificationChannel(e.a("com.google.android.gms.availability", string, 4));
                    } else if (!string.contentEquals(notificationChannel.getName())) {
                        notificationChannel.setName(string);
                        notificationManager.createNotificationChannel(notificationChannel);
                    }
                }
                Z.q(str2);
            }
            Notification g10 = Z.g();
            if (i10 != 1 && i10 != 2 && i10 != 3) {
                i11 = 39789;
            } else {
                j.f13814b.set(false);
                i11 = 10436;
            }
            notificationManager.notify(i11, g10);
        }
    }

    final void u(Context context) {
        new n(this, context).sendEmptyMessageDelayed(1, 120000L);
    }

    public final boolean v(Activity activity, ff.h hVar, int i10, int i11, DialogInterface.OnCancelListener onCancelListener) {
        Dialog p10 = p(activity, i10, e0.c(hVar, b(activity, i10, "d"), 2), onCancelListener, null);
        if (p10 == null) {
            return false;
        }
        s(activity, p10, "GooglePlayServicesErrorDialog", onCancelListener);
        return true;
    }

    public final boolean w(Context context, b bVar, int i10) {
        PendingIntent l10;
        if (pf.a.a(context) || (l10 = l(context, bVar)) == null) {
            return false;
        }
        t(context, bVar.c(), null, PendingIntent.getActivity(context, 0, GoogleApiActivity.a(context, l10, i10, true), fg.g.f23011a | 134217728));
        return true;
    }
}
