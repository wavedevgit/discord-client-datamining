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
    final int f883d;

    /* renamed from: e  reason: collision with root package name */
    final long f884e;

    /* renamed from: i  reason: collision with root package name */
    final long f885i;

    /* renamed from: o  reason: collision with root package name */
    final float f886o;

    /* renamed from: p  reason: collision with root package name */
    final long f887p;

    /* renamed from: q  reason: collision with root package name */
    final int f888q;

    /* renamed from: r  reason: collision with root package name */
    final CharSequence f889r;

    /* renamed from: s  reason: collision with root package name */
    final long f890s;

    /* renamed from: t  reason: collision with root package name */
    List f891t;

    /* renamed from: u  reason: collision with root package name */
    final long f892u;

    /* renamed from: v  reason: collision with root package name */
    final Bundle f893v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomAction implements Parcelable {
        public static final Parcelable.Creator<CustomAction> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f894d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f895e;

        /* renamed from: i  reason: collision with root package name */
        private final int f896i;

        /* renamed from: o  reason: collision with root package name */
        private final Bundle f897o;

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
            this.f894d = parcel.readString();
            this.f895e = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f896i = parcel.readInt();
            this.f897o = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "Action:mName='" + ((Object) this.f895e) + ", mIcon=" + this.f896i + ", mExtras=" + this.f897o;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f894d);
            TextUtils.writeToParcel(this.f895e, parcel, i10);
            parcel.writeInt(this.f896i);
            parcel.writeBundle(this.f897o);
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
        this.f883d = parcel.readInt();
        this.f884e = parcel.readLong();
        this.f886o = parcel.readFloat();
        this.f890s = parcel.readLong();
        this.f885i = parcel.readLong();
        this.f887p = parcel.readLong();
        this.f889r = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
        this.f891t = parcel.createTypedArrayList(CustomAction.CREATOR);
        this.f892u = parcel.readLong();
        this.f893v = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        this.f888q = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "PlaybackState {state=" + this.f883d + ", position=" + this.f884e + ", buffered position=" + this.f885i + ", speed=" + this.f886o + ", updated=" + this.f890s + ", actions=" + this.f887p + ", error code=" + this.f888q + ", error message=" + this.f889r + ", custom actions=" + this.f891t + ", active item id=" + this.f892u + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f883d);
        parcel.writeLong(this.f884e);
        parcel.writeFloat(this.f886o);
        parcel.writeLong(this.f890s);
        parcel.writeLong(this.f885i);
        parcel.writeLong(this.f887p);
        TextUtils.writeToParcel(this.f889r, parcel, i10);
        parcel.writeTypedList(this.f891t);
        parcel.writeLong(this.f892u);
        parcel.writeBundle(this.f893v);
        parcel.writeInt(this.f888q);
    }
}
