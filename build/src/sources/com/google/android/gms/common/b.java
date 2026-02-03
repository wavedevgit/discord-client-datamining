package com.google.android.gms.common;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import gf.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends hf.a {

    /* renamed from: d  reason: collision with root package name */
    final int f13400d;

    /* renamed from: e  reason: collision with root package name */
    private final int f13401e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f13402i;

    /* renamed from: o  reason: collision with root package name */
    private final String f13403o;

    /* renamed from: p  reason: collision with root package name */
    public static final b f13399p = new b(0);
    @NonNull
    public static final Parcelable.Creator<b> CREATOR = new o();

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, PendingIntent pendingIntent, String str) {
        this.f13400d = i10;
        this.f13401e = i11;
        this.f13402i = pendingIntent;
        this.f13403o = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String g(int i10) {
        if (i10 != 99) {
            if (i10 != 1500) {
                switch (i10) {
                    case -1:
                        return "UNKNOWN";
                    case 0:
                        return "SUCCESS";
                    case 1:
                        return "SERVICE_MISSING";
                    case 2:
                        return "SERVICE_VERSION_UPDATE_REQUIRED";
                    case 3:
                        return "SERVICE_DISABLED";
                    case 4:
                        return "SIGN_IN_REQUIRED";
                    case 5:
                        return "INVALID_ACCOUNT";
                    case 6:
                        return "RESOLUTION_REQUIRED";
                    case 7:
                        return "NETWORK_ERROR";
                    case 8:
                        return "INTERNAL_ERROR";
                    case 9:
                        return "SERVICE_INVALID";
                    case 10:
                        return "DEVELOPER_ERROR";
                    case 11:
                        return "LICENSE_CHECK_FAILED";
                    default:
                        switch (i10) {
                            case 13:
                                return "CANCELED";
                            case 14:
                                return "TIMEOUT";
                            case 15:
                                return "INTERRUPTED";
                            case 16:
                                return "API_UNAVAILABLE";
                            case 17:
                                return "SIGN_IN_FAILED";
                            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                return "SERVICE_UPDATING";
                            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                                return "SERVICE_MISSING_PERMISSION";
                            case 20:
                                return "RESTRICTED_PROFILE";
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                                return "API_VERSION_UPDATE_REQUIRED";
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                                return "RESOLUTION_ACTIVITY_NOT_FOUND";
                            case 23:
                                return "API_DISABLED";
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                return "API_DISABLED_FOR_CONNECTION";
                            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                                return "API_INSTALL_REQUIRED";
                            default:
                                return "UNKNOWN_ERROR_CODE(" + i10 + ")";
                        }
                }
            }
            return "DRIVE_EXTERNAL_STORAGE_REQUIRED";
        }
        return "UNFINISHED";
    }

    public int b() {
        return this.f13401e;
    }

    public String c() {
        return this.f13403o;
    }

    public PendingIntent d() {
        return this.f13402i;
    }

    public boolean e() {
        return (this.f13401e == 0 || this.f13402i == null) ? false : true;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f13401e == bVar.f13401e && gf.o.a(this.f13402i, bVar.f13402i) && gf.o.a(this.f13403o, bVar.f13403o)) {
            return true;
        }
        return false;
    }

    public boolean f() {
        return this.f13401e == 0;
    }

    public int hashCode() {
        return gf.o.b(Integer.valueOf(this.f13401e), this.f13402i, this.f13403o);
    }

    public String toString() {
        o.a c10 = gf.o.c(this);
        c10.a("statusCode", g(this.f13401e));
        c10.a("resolution", this.f13402i);
        c10.a("message", this.f13403o);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f13400d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, b());
        hf.c.q(parcel, 3, d(), i10, false);
        hf.c.s(parcel, 4, c(), false);
        hf.c.b(parcel, a10);
    }

    public b(int i10) {
        this(i10, null, null);
    }

    public b(int i10, PendingIntent pendingIntent) {
        this(i10, pendingIntent, null);
    }

    public b(int i10, PendingIntent pendingIntent, String str) {
        this(1, i10, pendingIntent, str);
    }
}
