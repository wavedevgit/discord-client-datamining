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
    final int f910d;

    /* renamed from: e  reason: collision with root package name */
    final long f911e;

    /* renamed from: i  reason: collision with root package name */
    final long f912i;

    /* renamed from: o  reason: collision with root package name */
    final float f913o;

    /* renamed from: p  reason: collision with root package name */
    final long f914p;

    /* renamed from: q  reason: collision with root package name */
    final int f915q;

    /* renamed from: r  reason: collision with root package name */
    final CharSequence f916r;

    /* renamed from: s  reason: collision with root package name */
    final long f917s;

    /* renamed from: t  reason: collision with root package name */
    List f918t;

    /* renamed from: u  reason: collision with root package name */
    final long f919u;

    /* renamed from: v  reason: collision with root package name */
    final Bundle f920v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomAction implements Parcelable {
        public static final Parcelable.Creator<CustomAction> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f921d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f922e;

        /* renamed from: i  reason: collision with root package name */
        private final int f923i;

        /* renamed from: o  reason: collision with root package name */
        private final Bundle f924o;

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
            this.f921d = parcel.readString();
            this.f922e = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f923i = parcel.readInt();
            this.f924o = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "Action:mName='" + ((Object) this.f922e) + ", mIcon=" + this.f923i + ", mExtras=" + this.f924o;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f921d);
            TextUtils.writeToParcel(this.f922e, parcel, i10);
            parcel.writeInt(this.f923i);
            parcel.writeBundle(this.f924o);
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
        this.f910d = parcel.readInt();
        this.f911e = parcel.readLong();
        this.f913o = parcel.readFloat();
        this.f917s = parcel.readLong();
        this.f912i = parcel.readLong();
        this.f914p = parcel.readLong();
        this.f916r = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
        this.f918t = parcel.createTypedArrayList(CustomAction.CREATOR);
        this.f919u = parcel.readLong();
        this.f920v = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        this.f915q = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "PlaybackState {state=" + this.f910d + ", position=" + this.f911e + ", buffered position=" + this.f912i + ", speed=" + this.f913o + ", updated=" + this.f917s + ", actions=" + this.f914p + ", error code=" + this.f915q + ", error message=" + this.f916r + ", custom actions=" + this.f918t + ", active item id=" + this.f919u + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f910d);
        parcel.writeLong(this.f911e);
        parcel.writeFloat(this.f913o);
        parcel.writeLong(this.f917s);
        parcel.writeLong(this.f912i);
        parcel.writeLong(this.f914p);
        TextUtils.writeToParcel(this.f916r, parcel, i10);
        parcel.writeTypedList(this.f918t);
        parcel.writeLong(this.f919u);
        parcel.writeBundle(this.f920v);
        parcel.writeInt(this.f915q);
    }
}
