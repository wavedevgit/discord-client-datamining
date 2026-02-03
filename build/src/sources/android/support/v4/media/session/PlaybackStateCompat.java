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
    final int f802d;

    /* renamed from: e  reason: collision with root package name */
    final long f803e;

    /* renamed from: i  reason: collision with root package name */
    final long f804i;

    /* renamed from: o  reason: collision with root package name */
    final float f805o;

    /* renamed from: p  reason: collision with root package name */
    final long f806p;

    /* renamed from: q  reason: collision with root package name */
    final int f807q;

    /* renamed from: r  reason: collision with root package name */
    final CharSequence f808r;

    /* renamed from: s  reason: collision with root package name */
    final long f809s;

    /* renamed from: t  reason: collision with root package name */
    List f810t;

    /* renamed from: u  reason: collision with root package name */
    final long f811u;

    /* renamed from: v  reason: collision with root package name */
    final Bundle f812v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomAction implements Parcelable {
        public static final Parcelable.Creator<CustomAction> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f813d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f814e;

        /* renamed from: i  reason: collision with root package name */
        private final int f815i;

        /* renamed from: o  reason: collision with root package name */
        private final Bundle f816o;

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
            this.f813d = parcel.readString();
            this.f814e = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f815i = parcel.readInt();
            this.f816o = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "Action:mName='" + ((Object) this.f814e) + ", mIcon=" + this.f815i + ", mExtras=" + this.f816o;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f813d);
            TextUtils.writeToParcel(this.f814e, parcel, i10);
            parcel.writeInt(this.f815i);
            parcel.writeBundle(this.f816o);
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
        this.f802d = parcel.readInt();
        this.f803e = parcel.readLong();
        this.f805o = parcel.readFloat();
        this.f809s = parcel.readLong();
        this.f804i = parcel.readLong();
        this.f806p = parcel.readLong();
        this.f808r = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
        this.f810t = parcel.createTypedArrayList(CustomAction.CREATOR);
        this.f811u = parcel.readLong();
        this.f812v = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        this.f807q = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "PlaybackState {state=" + this.f802d + ", position=" + this.f803e + ", buffered position=" + this.f804i + ", speed=" + this.f805o + ", updated=" + this.f809s + ", actions=" + this.f806p + ", error code=" + this.f807q + ", error message=" + this.f808r + ", custom actions=" + this.f810t + ", active item id=" + this.f811u + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f802d);
        parcel.writeLong(this.f803e);
        parcel.writeFloat(this.f805o);
        parcel.writeLong(this.f809s);
        parcel.writeLong(this.f804i);
        parcel.writeLong(this.f806p);
        TextUtils.writeToParcel(this.f808r, parcel, i10);
        parcel.writeTypedList(this.f810t);
        parcel.writeLong(this.f811u);
        parcel.writeBundle(this.f812v);
        parcel.writeInt(this.f807q);
    }
}
