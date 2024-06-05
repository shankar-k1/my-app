package com.learning.demo.model;

public class Games {
    private int id;
    private String game;
    private String playername;
    private int played_count;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGame() {
        return game;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public String getPlayername() {
        return playername;
    }

    public void setPlayername(String playername) {
        this.playername = playername;
    }

    public int getPlayed_count() {
        return played_count;
    }

    public void setPlayed_count(int played_count) {
        this.played_count = played_count;
    }

    @Override
    public String toString() {
        return "Games{" +
                "id=" + id +
                ", game='" + game + '\'' +
                ", playername='" + playername + '\'' +
                ", played_count=" + played_count +
                '}';
    }
}
