package com.google.firebase.messaging;

import android.os.Bundle;
import android.util.Base64;
import android.util.Log;
import com.google.android.gms.cloudmessaging.Rpc;
import com.google.android.gms.tasks.Task;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final ni.e f16057a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f16058b;

    /* renamed from: c  reason: collision with root package name */
    private final Rpc f16059c;

    /* renamed from: d  reason: collision with root package name */
    private final bj.b f16060d;

    /* renamed from: e  reason: collision with root package name */
    private final bj.b f16061e;

    /* renamed from: f  reason: collision with root package name */
    private final cj.e f16062f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(ni.e eVar, h0 h0Var, bj.b bVar, bj.b bVar2, cj.e eVar2) {
        this(eVar, h0Var, new Rpc(eVar.j()), bVar, bVar2, eVar2);
    }

    public static /* synthetic */ String a(c0 c0Var, Task task) {
        c0Var.getClass();
        return c0Var.g((Bundle) task.m(IOException.class));
    }

    private static String b(byte[] bArr) {
        return Base64.encodeToString(bArr, 11);
    }

    private Task c(Task task) {
        return task.h(new g2.i(), new wg.c() { // from class: com.google.firebase.messaging.b0
            @Override // wg.c
            public final Object a(Task task2) {
                return c0.a(c0.this, task2);
            }
        });
    }

    private String d() {
        try {
            return b(MessageDigest.getInstance("SHA-1").digest(this.f16057a.l().getBytes()));
        } catch (NoSuchAlgorithmException unused) {
            return "[HASH-ERROR]";
        }
    }

    private String g(Bundle bundle) {
        if (bundle != null) {
            String string = bundle.getString("registration_id");
            if (string != null) {
                return string;
            }
            String string2 = bundle.getString("unregistered");
            if (string2 != null) {
                return string2;
            }
            String string3 = bundle.getString("error");
            if (!"RST".equals(string3)) {
                if (string3 != null) {
                    throw new IOException(string3);
                }
                Log.w("FirebaseMessaging", "Unexpected response: " + bundle, new Throwable());
                throw new IOException("SERVICE_NOT_AVAILABLE");
            }
            throw new IOException("INSTANCE_ID_RESET");
        }
        throw new IOException("SERVICE_NOT_AVAILABLE");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h(String str) {
        if (!"SERVICE_NOT_AVAILABLE".equals(str) && !"INTERNAL_SERVER_ERROR".equals(str) && !"InternalServerError".equals(str)) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:15:0x00c0 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:23:? A[ADDED_TO_REGION, RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void i(java.lang.String r3, java.lang.String r4, android.os.Bundle r5) {
        /*
            r2 = this;
            java.lang.String r0 = "FirebaseMessaging"
            java.lang.String r1 = "scope"
            r5.putString(r1, r4)
            java.lang.String r4 = "sender"
            r5.putString(r4, r3)
            java.lang.String r4 = "subtype"
            r5.putString(r4, r3)
            ni.e r3 = r2.f16057a
            ni.k r3 = r3.m()
            java.lang.String r3 = r3.c()
            java.lang.String r4 = "gmp_app_id"
            r5.putString(r4, r3)
            com.google.firebase.messaging.h0 r3 = r2.f16058b
            int r3 = r3.d()
            java.lang.String r3 = java.lang.Integer.toString(r3)
            java.lang.String r4 = "gmsv"
            r5.putString(r4, r3)
            int r3 = android.os.Build.VERSION.SDK_INT
            java.lang.String r3 = java.lang.Integer.toString(r3)
            java.lang.String r4 = "osv"
            r5.putString(r4, r3)
            com.google.firebase.messaging.h0 r3 = r2.f16058b
            java.lang.String r3 = r3.a()
            java.lang.String r4 = "app_ver"
            r5.putString(r4, r3)
            com.google.firebase.messaging.h0 r3 = r2.f16058b
            java.lang.String r3 = r3.b()
            java.lang.String r4 = "app_ver_name"
            r5.putString(r4, r3)
            java.lang.String r3 = "firebase-app-name-hash"
            java.lang.String r4 = r2.d()
            r5.putString(r3, r4)
            cj.e r3 = r2.f16062f     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            r4 = 0
            com.google.android.gms.tasks.Task r3 = r3.a(r4)     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            java.lang.Object r3 = wg.m.a(r3)     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            com.google.firebase.installations.g r3 = (com.google.firebase.installations.g) r3     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            java.lang.String r3 = r3.b()     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            boolean r4 = android.text.TextUtils.isEmpty(r3)     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            if (r4 != 0) goto L7a
            java.lang.String r4 = "Goog-Firebase-Installations-Auth"
            r5.putString(r4, r3)     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            goto L85
        L76:
            r3 = move-exception
            goto L80
        L78:
            r3 = move-exception
            goto L80
        L7a:
            java.lang.String r3 = "FIS auth token is empty"
            android.util.Log.w(r0, r3)     // Catch: java.lang.InterruptedException -> L76 java.util.concurrent.ExecutionException -> L78
            goto L85
        L80:
            java.lang.String r4 = "Failed to get FIS auth token"
            android.util.Log.e(r0, r4, r3)
        L85:
            cj.e r3 = r2.f16062f
            com.google.android.gms.tasks.Task r3 = r3.getId()
            java.lang.Object r3 = wg.m.a(r3)
            java.lang.String r3 = (java.lang.String) r3
            java.lang.String r4 = "appid"
            r5.putString(r4, r3)
            java.lang.StringBuilder r3 = new java.lang.StringBuilder
            r3.<init>()
            java.lang.String r4 = "fcm-"
            r3.append(r4)
            java.lang.String r4 = "24.0.0"
            r3.append(r4)
            java.lang.String r3 = r3.toString()
            java.lang.String r4 = "cliv"
            r5.putString(r4, r3)
            bj.b r3 = r2.f16061e
            java.lang.Object r3 = r3.get()
            zi.j r3 = (zi.j) r3
            bj.b r4 = r2.f16060d
            java.lang.Object r4 = r4.get()
            jj.i r4 = (jj.i) r4
            if (r3 == 0) goto Le2
            if (r4 == 0) goto Le2
            java.lang.String r0 = "fire-iid"
            zi.j$a r3 = r3.b(r0)
            zi.j$a r0 = zi.j.a.NONE
            if (r3 == r0) goto Le2
            int r3 = r3.d()
            java.lang.String r3 = java.lang.Integer.toString(r3)
            java.lang.String r0 = "Firebase-Client-Log-Type"
            r5.putString(r0, r3)
            java.lang.String r3 = "Firebase-Client"
            java.lang.String r4 = r4.a()
            r5.putString(r3, r4)
        Le2:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.firebase.messaging.c0.i(java.lang.String, java.lang.String, android.os.Bundle):void");
    }

    private Task k(String str, String str2, Bundle bundle) {
        try {
            i(str, str2, bundle);
            return this.f16059c.c(bundle);
        } catch (InterruptedException | ExecutionException e10) {
            return wg.m.e(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Task e() {
        return this.f16059c.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Task f() {
        return c(k(h0.c(this.f16057a), "*", new Bundle()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Task j(boolean z10) {
        return this.f16059c.d(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Task l(String str, String str2) {
        Bundle bundle = new Bundle();
        bundle.putString("gcm.topic", "/topics/" + str2);
        return c(k(str, "/topics/" + str2, bundle));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Task m(String str, String str2) {
        Bundle bundle = new Bundle();
        bundle.putString("gcm.topic", "/topics/" + str2);
        bundle.putString("delete", "1");
        return c(k(str, "/topics/" + str2, bundle));
    }

    c0(ni.e eVar, h0 h0Var, Rpc rpc, bj.b bVar, bj.b bVar2, cj.e eVar2) {
        this.f16057a = eVar;
        this.f16058b = h0Var;
        this.f16059c = rpc;
        this.f16060d = bVar;
        this.f16061e = bVar2;
        this.f16062f = eVar2;
    }
}
