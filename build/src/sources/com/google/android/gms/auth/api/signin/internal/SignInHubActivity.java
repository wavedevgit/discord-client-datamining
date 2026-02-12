package com.google.android.gms.auth.api.signin.internal;

import af.p;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;
import androidx.fragment.app.FragmentActivity;
import com.discord.recycler_view.scroll.RecyclerViewScrollLimiter;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.SignInAccount;
import com.google.android.gms.common.annotation.KeepName;
import com.google.android.gms.common.api.Status;
@KeepName
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SignInHubActivity extends FragmentActivity {

    /* renamed from: q */
    private static boolean f14414q = false;

    /* renamed from: d */
    private boolean f14415d = false;

    /* renamed from: e */
    private SignInConfiguration f14416e;

    /* renamed from: i */
    private boolean f14417i;

    /* renamed from: o */
    private int f14418o;

    /* renamed from: p */
    private Intent f14419p;

    private final void A(int i10) {
        Status status = new Status(i10);
        Intent intent = new Intent();
        intent.putExtra("googleSignInStatus", status);
        setResult(0, intent);
        finish();
        f14414q = false;
    }

    private final void B(String str) {
        Intent intent = new Intent(str);
        if (str.equals("com.google.android.gms.auth.GOOGLE_SIGN_IN")) {
            intent.setPackage("com.google.android.gms");
        } else {
            intent.setPackage(getPackageName());
        }
        intent.putExtra("config", this.f14416e);
        try {
            startActivityForResult(intent, 40962);
        } catch (ActivityNotFoundException unused) {
            this.f14415d = true;
            Log.w("AuthSignInClient", "Could not launch sign in Intent. Google Play Service is probably being updated...");
            A(17);
        }
    }

    private final void z() {
        getSupportLoaderManager().c(0, null, new a(this, null));
        f14414q = false;
    }

    @Override // android.app.Activity, android.view.Window.Callback
    public final boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        return true;
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, android.app.Activity
    public final void onActivityResult(int i10, int i11, Intent intent) {
        if (!this.f14415d) {
            setResult(0);
            if (i10 != 40962) {
                return;
            }
            if (intent != null) {
                SignInAccount signInAccount = (SignInAccount) intent.getParcelableExtra("signInAccount");
                if (signInAccount != null && signInAccount.b() != null) {
                    GoogleSignInAccount b10 = signInAccount.b();
                    if (b10 == null) {
                        Log.e("AuthSignInClient", "Google account is null");
                        A(RecyclerViewScrollLimiter.MAX_FLING_VELOCITY);
                        return;
                    }
                    p.a(this).c(this.f14416e.b(), b10);
                    intent.removeExtra("signInAccount");
                    intent.putExtra("googleSignInAccount", b10);
                    this.f14417i = true;
                    this.f14418o = i11;
                    this.f14419p = intent;
                    z();
                    return;
                } else if (intent.hasExtra("errorCode")) {
                    int intExtra = intent.getIntExtra("errorCode", 8);
                    if (intExtra == 13) {
                        intExtra = 12501;
                    }
                    A(intExtra);
                    return;
                }
            }
            A(8);
        }
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public final void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Intent intent = getIntent();
        String action = intent.getAction();
        if (action == null) {
            Log.e("AuthSignInClient", "Null action");
            A(RecyclerViewScrollLimiter.MAX_FLING_VELOCITY);
        } else if (action.equals("com.google.android.gms.auth.NO_IMPL")) {
            Log.e("AuthSignInClient", "Action not implemented");
            A(RecyclerViewScrollLimiter.MAX_FLING_VELOCITY);
        } else if (!action.equals("com.google.android.gms.auth.GOOGLE_SIGN_IN") && !action.equals("com.google.android.gms.auth.APPAUTH_SIGN_IN")) {
            Log.e("AuthSignInClient", "Unknown action: ".concat(String.valueOf(intent.getAction())));
            finish();
        } else {
            Bundle bundleExtra = intent.getBundleExtra("config");
            if (bundleExtra == null) {
                Log.e("AuthSignInClient", "Activity started with no configuration.");
                setResult(0);
                finish();
                return;
            }
            SignInConfiguration signInConfiguration = (SignInConfiguration) bundleExtra.getParcelable("config");
            if (signInConfiguration == null) {
                Log.e("AuthSignInClient", "Activity started with invalid configuration.");
                setResult(0);
                finish();
                return;
            }
            this.f14416e = signInConfiguration;
            if (bundle == null) {
                if (f14414q) {
                    setResult(0);
                    A(12502);
                    return;
                }
                f14414q = true;
                B(action);
                return;
            }
            boolean z10 = bundle.getBoolean("signingInGoogleApiClients");
            this.f14417i = z10;
            if (z10) {
                this.f14418o = bundle.getInt("signInResultCode");
                Intent intent2 = (Intent) bundle.getParcelable("signInResultData");
                if (intent2 == null) {
                    Log.e("AuthSignInClient", "Sign in result data cannot be null");
                    setResult(0);
                    finish();
                    return;
                }
                this.f14419p = intent2;
                z();
            }
        }
    }

    @Override // androidx.fragment.app.FragmentActivity, android.app.Activity
    public final void onDestroy() {
        super.onDestroy();
        f14414q = false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public final void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        bundle.putBoolean("signingInGoogleApiClients", this.f14417i);
        if (this.f14417i) {
            bundle.putInt("signInResultCode", this.f14418o);
            bundle.putParcelable("signInResultData", this.f14419p);
        }
    }
}
