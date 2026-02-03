package gf;

import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.text.TextUtils;
import android.util.Log;
import androidx.collection.SimpleArrayMap;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b0 {

    /* renamed from: a  reason: collision with root package name */
    private static final SimpleArrayMap f26840a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    private static Locale f26841b;

    public static String a(Context context) {
        String packageName = context.getPackageName();
        try {
            return pf.c.a(context).d(packageName).toString();
        } catch (PackageManager.NameNotFoundException | NullPointerException unused) {
            String str = context.getApplicationInfo().name;
            if (TextUtils.isEmpty(str)) {
                return packageName;
            }
            return str;
        }
    }

    public static String b(Context context, int i10) {
        Resources resources = context.getResources();
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return resources.getString(17039370);
                }
                return resources.getString(cf.b.f8169a);
            }
            return resources.getString(cf.b.f8178j);
        }
        return resources.getString(cf.b.f8172d);
    }

    public static String c(Context context, int i10) {
        Resources resources = context.getResources();
        String a10 = a(context);
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 5) {
                        if (i10 != 7) {
                            if (i10 != 9) {
                                if (i10 != 20) {
                                    switch (i10) {
                                        case 16:
                                            return g(context, "common_google_play_services_api_unavailable_text", a10);
                                        case 17:
                                            return g(context, "common_google_play_services_sign_in_failed_text", a10);
                                        case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                            return resources.getString(cf.b.f8181m, a10);
                                        default:
                                            return resources.getString(com.google.android.gms.common.l.f14457a, a10);
                                    }
                                }
                                return g(context, "common_google_play_services_restricted_profile_text", a10);
                            }
                            return resources.getString(cf.b.f8177i, a10);
                        }
                        return g(context, "common_google_play_services_network_error_text", a10);
                    }
                    return g(context, "common_google_play_services_invalid_account_text", a10);
                }
                return resources.getString(cf.b.f8170b, a10);
            } else if (com.google.android.gms.common.util.g.d(context)) {
                return resources.getString(cf.b.f8182n);
            } else {
                return resources.getString(cf.b.f8179k, a10);
            }
        }
        return resources.getString(cf.b.f8173e, a10);
    }

    public static String d(Context context, int i10) {
        if (i10 != 6 && i10 != 19) {
            return c(context, i10);
        }
        return g(context, "common_google_play_services_resolution_required_text", a(context));
    }

    public static String e(Context context, int i10) {
        String f10;
        if (i10 == 6) {
            f10 = h(context, "common_google_play_services_resolution_required_title");
        } else {
            f10 = f(context, i10);
        }
        if (f10 == null) {
            return context.getResources().getString(cf.b.f8176h);
        }
        return f10;
    }

    public static String f(Context context, int i10) {
        Resources resources = context.getResources();
        switch (i10) {
            case 1:
                return resources.getString(cf.b.f8174f);
            case 2:
                return resources.getString(cf.b.f8180l);
            case 3:
                return resources.getString(cf.b.f8171c);
            case 4:
            case 6:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return null;
            case 5:
                Log.e("GoogleApiAvailability", "An invalid account was specified when connecting. Please provide a valid account.");
                return h(context, "common_google_play_services_invalid_account_title");
            case 7:
                Log.e("GoogleApiAvailability", "Network error occurred. Please retry request later.");
                return h(context, "common_google_play_services_network_error_title");
            case 8:
                Log.e("GoogleApiAvailability", "Internal error occurred. Please see logs for detailed information");
                return null;
            case 9:
                Log.e("GoogleApiAvailability", "Google Play services is invalid. Cannot recover.");
                return null;
            case 10:
                Log.e("GoogleApiAvailability", "Developer error occurred. Please see logs for detailed information");
                return null;
            case 11:
                Log.e("GoogleApiAvailability", "The application is not licensed to the user.");
                return null;
            case 12:
            case 13:
            case 14:
            case 15:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            default:
                Log.e("GoogleApiAvailability", "Unexpected error code " + i10);
                return null;
            case 16:
                Log.e("GoogleApiAvailability", "One of the API components you attempted to connect to is not available.");
                return null;
            case 17:
                Log.e("GoogleApiAvailability", "The specified account could not be signed in.");
                return h(context, "common_google_play_services_sign_in_failed_title");
            case 20:
                Log.e("GoogleApiAvailability", "The current user profile is restricted and could not use authenticated features.");
                return h(context, "common_google_play_services_restricted_profile_title");
        }
    }

    private static String g(Context context, String str, String str2) {
        Resources resources = context.getResources();
        String h10 = h(context, str);
        if (h10 == null) {
            h10 = resources.getString(com.google.android.gms.common.l.f14457a);
        }
        return String.format(resources.getConfiguration().locale, h10, str2);
    }

    private static String h(Context context, String str) {
        SimpleArrayMap simpleArrayMap = f26840a;
        synchronized (simpleArrayMap) {
            try {
                Locale c10 = w1.e.a(context.getResources().getConfiguration()).c(0);
                if (!c10.equals(f26841b)) {
                    simpleArrayMap.clear();
                    f26841b = c10;
                }
                String str2 = (String) simpleArrayMap.get(str);
                if (str2 != null) {
                    return str2;
                }
                Resources c11 = com.google.android.gms.common.i.c(context);
                if (c11 == null) {
                    return null;
                }
                int identifier = c11.getIdentifier(str, InquiryField.StringField.TYPE, "com.google.android.gms");
                if (identifier == 0) {
                    Log.w("GoogleApiAvailability", "Missing resource: " + str);
                    return null;
                }
                String string = c11.getString(identifier);
                if (TextUtils.isEmpty(string)) {
                    Log.w("GoogleApiAvailability", "Got empty resource: " + str);
                    return null;
                }
                simpleArrayMap.put(str, string);
                return string;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
