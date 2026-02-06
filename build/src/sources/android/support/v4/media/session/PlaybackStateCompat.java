package android.support.v4.media.session;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import java.util.List;
@SuppressLint({"BanParcelableUsage"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PlaybackStateCompat implements Parcelable {
    public static final Parcelable.Creator<PlaybackStateCompat> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    final int f1212d;

    /* renamed from: e  reason: collision with root package name */
    final long f1213e;

    /* renamed from: i  reason: collision with root package name */
    final long f1214i;

    /* renamed from: o  reason: collision with root package name */
    final float f1215o;

    /* renamed from: p  reason: collision with root package name */
    final long f1216p;

    /* renamed from: q  reason: collision with root package name */
    final int f1217q;

    /* renamed from: r  reason: collision with root package name */
    final CharSequence f1218r;

    /* renamed from: s  reason: collision with root package name */
    final long f1219s;

    /* renamed from: t  reason: collision with root package name */
    List f1220t;

    /* renamed from: u  reason: collision with root package name */
    final long f1221u;

    /* renamed from: v  reason: collision with root package name */
    final Bundle f1222v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomAction implements Parcelable {
        public static final Parcelable.Creator<CustomAction> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f1223d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f1224e;

        /* renamed from: i  reason: collision with root package name */
        private final int f1225i;

        /* renamed from: o  reason: collision with root package name */
        private final Bundle f1226o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public CustomAction createFromParcel(Parcel parcel) {
                return new CustomAction(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public CustomAction[] newArray(int i10) {
                return new CustomAction[i10];
            }
        }

        CustomAction(Parcel parcel) {
            this.f1223d = parcel.readString();
            this.f1224e = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f1225i = parcel.readInt();
            this.f1226o = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "Action:mName='" + ((Object) this.f1224e) + ", mIcon=" + this.f1225i + ", mExtras=" + this.f1226o;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f1223d);
            TextUtils.writeToParcel(this.f1224e, parcel, i10);
            parcel.writeInt(this.f1225i);
            parcel.writeBundle(this.f1226o);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Parcelable.Creator {
        a() {
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public PlaybackStateCompat createFromParcel(Parcel parcel) {
            return new PlaybackStateCompat(parcel);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public PlaybackStateCompat[] newArray(int i10) {
            return new PlaybackStateCompat[i10];
        }
    }

    PlaybackStateCompat(Parcel parcel) {
        this.f1212d = parcel.readInt();
        this.f1213e = parcel.readLong();
        this.f1215o = parcel.readFloat();
        this.f1219s = parcel.readLong();
        this.f1214i = parcel.readLong();
        this.f1216p = parcel.readLong();
        this.f1218r = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
        this.f1220t = parcel.createTypedArrayList(CustomAction.CREATOR);
        this.f1221u = parcel.readLong();
        this.f1222v = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        this.f1217q = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "PlaybackState {state=" + this.f1212d + ", position=" + this.f1213e + ", buffered position=" + this.f1214i + ", speed=" + this.f1215o + ", updated=" + this.f1219s + ", actions=" + this.f1216p + ", error code=" + this.f1217q + ", error message=" + this.f1218r + ", custom actions=" + this.f1220t + ", active item id=" + this.f1221u + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f1212d);
        parcel.writeLong(this.f1213e);
        parcel.writeFloat(this.f1215o);
        parcel.writeLong(this.f1219s);
        parcel.writeLong(this.f1214i);
        parcel.writeLong(this.f1216p);
        TextUtils.writeToParcel(this.f1218r, parcel, i10);
        parcel.writeTypedList(this.f1220t);
        parcel.writeLong(this.f1221u);
        parcel.writeBundle(this.f1222v);
        parcel.writeInt(this.f1217q);
    }
}
