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
    final int f13748d;

    /* renamed from: e  reason: collision with root package name */
    private final int f13749e;

    /* renamed from: i  reason: collision with root package name */
    private final PendingIntent f13750i;

    /* renamed from: o  reason: collision with root package name */
    private final String f13751o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f13752p;

    /* renamed from: q  reason: collision with root package name */
    public static final b f13747q = new b(0);
    @NonNull
    public static final Parcelable.Creator<b> CREATOR = new q();

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, PendingIntent pendingIntent, String str, Integer num) {
        this.f13748d = i10;
        this.f13749e = i11;
        this.f13750i = pendingIntent;
        this.f13751o = str;
        this.f13752p = num;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String i(int i10) {
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
                                StringBuilder sb2 = new StringBuilder(String.valueOf(i10).length() + 20);
                                sb2.append("UNKNOWN_ERROR_CODE(");
                                sb2.append(i10);
                                sb2.append(")");
                                return sb2.toString();
                        }
                }
            }
            return "DRIVE_EXTERNAL_STORAGE_REQUIRED";
        }
        return "UNFINISHED";
    }

    public Integer b() {
        return this.f13752p;
    }

    public int c() {
        return this.f13749e;
    }

    public String d() {
        return this.f13751o;
    }

    public PendingIntent e() {
        return this.f13750i;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f13749e == bVar.f13749e && gf.o.a(this.f13750i, bVar.f13750i) && gf.o.a(this.f13751o, bVar.f13751o) && gf.o.a(this.f13752p, bVar.f13752p)) {
            return true;
        }
        return false;
    }

    public boolean f() {
        return (this.f13749e == 0 || this.f13750i == null) ? false : true;
    }

    public boolean h() {
        return this.f13749e == 0;
    }

    public int hashCode() {
        return gf.o.b(Integer.valueOf(this.f13749e), this.f13750i, this.f13751o, this.f13752p);
    }

    public String toString() {
        o.a c10 = gf.o.c(this);
        c10.a("statusCode", i(this.f13749e));
        c10.a("resolution", this.f13750i);
        c10.a("message", this.f13751o);
        c10.a("clientMethodKey", this.f13752p);
        return c10.toString();
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f13748d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, c());
        hf.c.q(parcel, 3, e(), i10, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.n(parcel, 5, b(), false);
        hf.c.b(parcel, a10);
    }

    public b(int i10) {
        this(i10, null, null);
    }

    public b(int i10, PendingIntent pendingIntent) {
        this(i10, pendingIntent, null);
    }

    public b(int i10, PendingIntent pendingIntent, String str) {
        this(1, i10, pendingIntent, str, null);
    }
}
