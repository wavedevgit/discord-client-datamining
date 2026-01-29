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
    final int f758d;

    /* renamed from: e  reason: collision with root package name */
    final long f759e;

    /* renamed from: i  reason: collision with root package name */
    final long f760i;

    /* renamed from: o  reason: collision with root package name */
    final float f761o;

    /* renamed from: p  reason: collision with root package name */
    final long f762p;

    /* renamed from: q  reason: collision with root package name */
    final int f763q;

    /* renamed from: r  reason: collision with root package name */
    final CharSequence f764r;

    /* renamed from: s  reason: collision with root package name */
    final long f765s;

    /* renamed from: t  reason: collision with root package name */
    List f766t;

    /* renamed from: u  reason: collision with root package name */
    final long f767u;

    /* renamed from: v  reason: collision with root package name */
    final Bundle f768v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CustomAction implements Parcelable {
        public static final Parcelable.Creator<CustomAction> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        private final String f769d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f770e;

        /* renamed from: i  reason: collision with root package name */
        private final int f771i;

        /* renamed from: o  reason: collision with root package name */
        private final Bundle f772o;

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
            this.f769d = parcel.readString();
            this.f770e = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
            this.f771i = parcel.readInt();
            this.f772o = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public String toString() {
            return "Action:mName='" + ((Object) this.f770e) + ", mIcon=" + this.f771i + ", mExtras=" + this.f772o;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f769d);
            TextUtils.writeToParcel(this.f770e, parcel, i10);
            parcel.writeInt(this.f771i);
            parcel.writeBundle(this.f772o);
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
        this.f758d = parcel.readInt();
        this.f759e = parcel.readLong();
        this.f761o = parcel.readFloat();
        this.f765s = parcel.readLong();
        this.f760i = parcel.readLong();
        this.f762p = parcel.readLong();
        this.f764r = (CharSequence) TextUtils.CHAR_SEQUENCE_CREATOR.createFromParcel(parcel);
        this.f766t = parcel.createTypedArrayList(CustomAction.CREATOR);
        this.f767u = parcel.readLong();
        this.f768v = parcel.readBundle(MediaSessionCompat.class.getClassLoader());
        this.f763q = parcel.readInt();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public String toString() {
        return "PlaybackState {state=" + this.f758d + ", position=" + this.f759e + ", buffered position=" + this.f760i + ", speed=" + this.f761o + ", updated=" + this.f765s + ", actions=" + this.f762p + ", error code=" + this.f763q + ", error message=" + this.f764r + ", custom actions=" + this.f766t + ", active item id=" + this.f767u + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f758d);
        parcel.writeLong(this.f759e);
        parcel.writeFloat(this.f761o);
        parcel.writeLong(this.f765s);
        parcel.writeLong(this.f760i);
        parcel.writeLong(this.f762p);
        TextUtils.writeToParcel(this.f764r, parcel, i10);
        parcel.writeTypedList(this.f766t);
        parcel.writeLong(this.f767u);
        parcel.writeBundle(this.f768v);
        parcel.writeInt(this.f763q);
    }
}
