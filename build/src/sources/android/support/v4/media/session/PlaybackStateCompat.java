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
    final int f909d;

    /* renamed from: e  reason: collision with root package name */
    final long f910e;

    /* renamed from: i  reason: collision with root package name */
    final long f911i;

    /* renamed from: o  reason: collision with root package name */
    final float f912o;

    /* renamed from: p  reason: collision with root package name */
    final long f913p;

    /* renamed from: q  reason: collision with root package name */
    final int f914q;

    /* renamed from: r  reason: collision with root package name */
    final CharSequence f915r;

    /* renamed from: s  reason: collision with root package name */
    final long f916s;

    /* renamed from: t  reason: collision with root package name */
    List f917t;

    /* renamed from: u  reason: collision with root package name */
    final long f918u;

    /* renamed from: v  reason: collision with root package name */
    final Bundle f919v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomAction implements Parcelable {
        public static final Parcelable.Creator<CustomAction> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f920d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f921e;

        /* renamed from: i  reason: collision with root package name */
        private final int f922i;

        /* renamed from: o  reason: collision with root package name */
        private final Bundle f923o;

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
            this.f920d = parcel.readString();
            this.f921e = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f922i = parcel.readInt();
            this.f923o = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "Action:mName='" + ((Object) this.f921e) + ", mIcon=" + this.f922i + ", mExtras=" + this.f923o;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f920d);
            TextUtils.writeToParcel(this.f921e, parcel, i10);
            parcel.writeInt(this.f922i);
            parcel.writeBundle(this.f923o);
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
        this.f909d = parcel.readInt();
        this.f910e = parcel.readLong();
        this.f912o = parcel.readFloat();
        this.f916s = parcel.readLong();
        this.f911i = parcel.readLong();
        this.f913p = parcel.readLong();
        this.f915r = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
        this.f917t = parcel.createTypedArrayList(CustomAction.CREATOR);
        this.f918u = parcel.readLong();
        this.f919v = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        this.f914q = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "PlaybackState {state=" + this.f909d + ", position=" + this.f910e + ", buffered position=" + this.f911i + ", speed=" + this.f912o + ", updated=" + this.f916s + ", actions=" + this.f913p + ", error code=" + this.f914q + ", error message=" + this.f915r + ", custom actions=" + this.f917t + ", active item id=" + this.f918u + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f909d);
        parcel.writeLong(this.f910e);
        parcel.writeFloat(this.f912o);
        parcel.writeLong(this.f916s);
        parcel.writeLong(this.f911i);
        parcel.writeLong(this.f913p);
        TextUtils.writeToParcel(this.f915r, parcel, i10);
        parcel.writeTypedList(this.f917t);
        parcel.writeLong(this.f918u);
        parcel.writeBundle(this.f919v);
        parcel.writeInt(this.f914q);
    }
}
